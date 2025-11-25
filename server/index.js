import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import emailRoutes from "./routes/emailRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const { STRIPE_SECRET_KEY, STRIPE_PRICE_ID, FRONTEND_URL, PORT } = process.env;

const app = express();
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

app.use(cors({ origin: FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API online");
});

app.post("/create-checkout-session", async (req, res) => {
  if (!stripe || !STRIPE_PRICE_ID) {
    return res.status(500).json({ error: "Stripe não configurado." });
  }

  try {
    const quantity = req.body.quantity || 1;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: STRIPE_PRICE_ID, quantity }],
      success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/canceled`,
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar sessão de pagamento." });
  }
});

app.get("/checkout-session", async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: "Stripe não configurado." });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    res.json(session);
  } catch {
    res.status(404).json({ error: "Sessão não encontrada." });
  }
});

app.use("/", emailRoutes);

const port = PORT || 4242;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
