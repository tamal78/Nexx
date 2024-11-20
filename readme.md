# Nexx 🚀

![Nexx Preview](https://i.ibb.co/fxSfLpb/Screenshot-2024-11-20-134728.png)

**Nexx** is a full-stack SaaS platform designed to collect user feedback seamlessly through an embeddable widget. Developed with **Next.js** and **TypeScript**, Nexx allows users to integrate feedback collection forms directly into their applications while managing feedback and user subscriptions efficiently.

---

## 🌟 Features

- 📝 **Feedback Collection**  
  Collect user feedback through an easy-to-use embeddable widget integrated into your platform.

- 💡 **Feedback Management**  
  Organize and manage feedback effortlessly with a powerful dashboard for project creation, feedback review, filtering, and search.

- 🔐 **Subscription-based Project Limits**  
  Implement tiered access to projects with Stripe, offering both free and premium subscription plans.

- 📊 **Search and Filter Feedback**  
  Quickly search and filter feedback submissions based on different criteria.

- 🛠️ **Embeddable Widget**  
  Embed the feedback widget in your application for users to submit feedback without leaving your platform.

- 🚀 **Fully Responsive Design**  
  A responsive interface for users on all devices, making it easy to manage feedback anywhere.

- ⚙️ **Stripe Integration**  
  Use Stripe to manage subscriptions and project limits, ensuring that premium users have access to enhanced features.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Express.js, Next.js API Routes
- **Database**: PostgreSQL with Drizzle ORM
- **Payment Integration**: Stripe
- **Authentication**: JWT
- **Hosting**: Vercel

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- A **Stripe** account for payment integration.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tamal/nexx.git

   ```

2. Navigate to the project directory:

   ```bash
   cd nexx
   ```

3. Install dependencies:

   ```bash
   cd application && npm install
   ```

4. Set up environment variables:  
    Create a `.env` file in the root directory and configure the required variables, e.g.:

   ```env
   DATABASE_URL=...
   STRIPE_SECRET_KEY=...
   CLERK_SECRET_KEY=..
   WIDGET_URL=...
   STRIPE_WEBHOOK_SECRET=...
   NODE_ENV=..
   ```

5. Run database migrations (if applicable):

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## 📸 Dashboard Preview

![Dashboard Preview](https://i.ibb.co/MB6fJy3/Screenshot-2024-11-20-134918.png)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

---

### 🌐 Live Demo

- Check out the live **Nexx Platform** [here](https://nexxxx.vercel.app/)  
  _(This is the main Nexx platform for feedback collection and management)_

- Check out the live **Nexx Widget Demo** [here](https://nexx-demo.vercel.app/)  
  _(This demo showcases the Nexx widget integrated into an application for feedback collection)_
