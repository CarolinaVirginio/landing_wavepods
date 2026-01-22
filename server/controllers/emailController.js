import { validateEmail } from "../utils/validateEmail.js";

export const validateEmailController = (req, res) => {
  const email = req.body?.email;

  if (!email) {
    return res
      .status(400)
      .json({ valid: false, message: "Email é obrigatório." });
  }

  if (!validateEmail(email)) {
    return res.status(422).json({ valid: false, message: "Email inválido." });
  }

  res.json({ valid: true, message: "Email válido!" });
};
