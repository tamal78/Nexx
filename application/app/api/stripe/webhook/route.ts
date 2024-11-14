import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import {
  createSubscription,
  cancelSubscription,
} from "@/actions/userSubscriptions";
import { log } from "console";

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.deleted",
]);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;
  const webHookSecret =
    process.env.NODE_ENV === "production"
      ? process.env.STRIPE_WEBHOOK_SECRET
      : process.env.STRIPE_WEBHOOK_LOCAL_SECRET;

  if (!webHookSecret) {
    console.error("Webhook secret not set");
    return new Response("Webhook secret not set", { status: 400 });
  }

  if (!sig) {
    console.error("No signature in request");
    return new Response("No signature", { status: 400 });
  }

  let event;
  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(body, sig, webHookSecret);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return new Response("Signature verification failed", { status: 400 });
  }

  try {
    console.log("Received event:", event.type);
    const data = event.data.object as Stripe.Subscription;

    if (relevantEvents.has(event.type)) {
      if (event.type === "customer.subscription.created") {
        console.log(
          "Processing customer.subscription.created for:",
          data.customer
        );
        await createSubscription({ stripeCustomerId: data.customer as string });
      } else if (event.type === "customer.subscription.deleted") {
        console.log(
          "Processing customer.subscription.deleted for:",
          data.customer
        );
        await cancelSubscription({ stripeCustomerId: data.customer as string });
      }
    } else {
      console.log("Unhandled event type:", event.type);
    }

    return new Response(
      JSON.stringify({
        received: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the event:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
