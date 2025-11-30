# WavePods — Original Project

WavePods is an original frontend project, designed and implemented from scratch to practice interface design, component architecture, and a basic checkout flow using Stripe.

- Built with React + Vite
- Styled with Material UI
- Includes a simple Stripe Checkout flow (backend in Node + Express)
- Fully responsive
- No templates or copy-paste from courses — everything custom-made

## About the Project

This landing page demonstrates modern frontend practices with a clean structure and small backend integration for payment flow verification.

### Features include

- Main content
- Feature highlights
- Motivation and product showcase
- Checkout button integrated with Stripe
- Success and Cancel pages

## Project Structure

```
landing_wavepods/
│
├── client/ # React + Vite frontend
│   ├── public/ # Static assets (images, icons, screenshots)
│   └── src/ # Components, pages, routing
│
├── server/ # Node.js + Express backend
│   ├── index.js # Server logic + Stripe integration
│   └── .env.production # Environment variables (not included in repo)
│
├── docker-compose.yml # Full project containerization
├── package.json # Root scripts (concurrently)
└── README.md
```

## Tech Stack

**Frontend**

- React (Vite)
- React Router DOM
- Material UI
- Framer Motion (optional)

**Backend**

- Node.js + Express
- Stripe API / Stripe Node SDK
- dotenv
- CORS

## Environment Variables

Create a .env.production file inside the server/ folder using the example below.

```
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
FRONTEND_URL=http://localhost:8080
PORT=4242
```

These values are loaded automatically by Docker.

## How to Run the Project

## ▶ Option 1 — Running with Docker (recommended)

This project is fully dockerized. To start everything:

```
docker-compose up --build
```

This command:

- Builds the frontend (React + Vite)
- Builds the backend (Node + Express)
- Starts Nginx serving the frontend
- Proxies `/api/*` requests to the backend

**URLs**

- Frontend: http://localhost:8080
- Backend (via proxy): http://localhost:8080/api
- Backend direct access: http://localhost:4242

### To stop the containers:

**CTRL + C**

```
docker-compose down
```

## ▶ Option 2 — Running without Docker (dev mode)

1. Clone the repository

```
git clone https://github.com/CarolinaVirginio/landing_wavepods.git
cd landing_wavepods
```

2. Install all dependencies

**Client**

```
cd client
npm install
```

**Server**

```
cd server
npm install
```

3. Create your environment variables

Inside /server:

```
STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
FRONTEND_URL=http://localhost:5173
PORT=4242
```

4. Run everything from the project root:

```
cd ..
npm run dev
```

This command:

- starts the backend with nodemon
- starts the frontend with Vite
- keeps both running simultaneously using concurrently

**URLs:**

Frontend: http://localhost:5173

Backend: http://localhost:4242

## Screenshots

**(click to enlarge)**

[![Main](./client/public/contentmain.jpeg)](./client/public/contentmain.jpeg)
[![Features](./client/public/features.jpeg)](./client/public/features.jpeg)
[![Motivation1](./client/public/motivation1.jpeg)](./client/public/motivation1.jpeg)
[![Motivation2](./client/public/motivation2.jpeg)](./client/public/motivation2.jpeg)
[![Motivation3](./client/public/motivation3.jpeg)](./client/public/motivation3.jpeg)
[![Buy](./client/public/buysection-footer.jpeg)](./client/public/buysection-footer.jpeg)

## Author

**Carolina Virginio**

Developed as part of my frontend portfolio and learning process.

## License

© 2025 Carolina Virginio. All rights reserved.
This project is proprietary and may not be copied or used without permission.
