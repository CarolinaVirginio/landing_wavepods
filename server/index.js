import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import emailRoutes from "./routes/emailRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const { STRIPE_SECRET_KEY, STRIPE_PRICE_ID, FRONTEND_URL, PORT } = process.env;

const app = express();
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

const allowedOrigins = [
  FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:8080",
  "http://localhost:4173",
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      const isLocalhost =
        origin.startsWith("http://localhost") ||
        origin.startsWith("http://127.0.0.1");
      if (allowedOrigins.includes(origin) || isLocalhost) {
        callback(null, true);
      } else {
        callback(new Error("Erro de CORS: Acesso não permitido"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", emailRoutes);

app.post("/api/create-checkout-session", async (req, res) => {
  if (!stripe || !STRIPE_PRICE_ID) {
    return res.status(500).json({ error: "Stripe não configurado." });
  }

  try {
    const requestOrigin =
      req.headers.origin || FRONTEND_URL || "http://localhost:5173";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        { price: STRIPE_PRICE_ID, quantity: req.body.quantity || 1 },
      ],

      success_url: `${requestOrigin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${requestOrigin}/canceled`,
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/checkout-session", async (req, res) => {
  if (!stripe)
    return res.status(500).json({ error: "Stripe não configurado." });
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    res.json(session);
  } catch {
    res.status(404).json({ error: "Sessão não encontrada." });
  }
});

const port = PORT || 4242;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
