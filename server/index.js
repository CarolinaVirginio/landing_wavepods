import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const { STRIPE_SECRET_KEY, STRIPE_PRICE_ID, FRONTEND_URL, PORT } = process.env;

if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_ID) {
  throw new Error(
    "As variáveis STRIPE_SECRET_KEY e STRIPE_PRICE_ID são obrigatórias."
  );
}

const app = express();
const stripe = new Stripe(STRIPE_SECRET_KEY);

app.use(
  cors({
    origin: FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Servidor funcionando");
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    const quantity = req.body.quantity || 1;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: STRIPE_PRICE_ID,
          quantity,
          adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
        },
      ],
      success_url: `${
        FRONTEND_URL || "http://localhost:5173"
      }/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL || "http://localhost:5173"}/canceled`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Erro ao criar sessão do Stripe:", err);
    res
      .status(500)
      .json({ error: "Não foi possível criar a sessão de pagamento." });
  }
});

app.get("/checkout-session", async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json(session);
  } catch (err) {
    console.error("Erro ao buscar sessão do Stripe:", err);
    res.status(404).json({ error: "Sessão não encontrada." });
  }
});

app.listen(PORT || 4242, () => {
  console.log(`Servidor rodando na porta ${PORT || 4242}`);
});
