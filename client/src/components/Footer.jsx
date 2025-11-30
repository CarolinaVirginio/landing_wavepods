import { Box, Container, Typography, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

const quickLinks = ["Sobre nós", "Suporte", "Política de privacidade"];
const socialLinks = ["Instagram", "Facebook", "Twitter"];

const FooterLink = ({ label }) => (
  <Typography
    variant="body2"
    sx={{
      mb: 1,
      cursor: "pointer",
      transition: "color 0.2s",
      "&:hover": { color: "#00bfff" },
    }}
  >
    {label}
  </Typography>
);

const FooterColumn = ({ title, items }) => (
  <Box sx={{ mb: { xs: 4, md: 0 } }}>
    <Typography
      variant="h6"
      sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#e4dede", mb: 2 }}
    >
      {title}
    </Typography>
    {items.map((item) => (
      <FooterLink key={item} label={item} />
    ))}
  </Box>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/validate-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.valid) {
        setStatus("sucesso");
        setEmail("");
      } else {
        setStatus("erro");
      }
    } catch (error) {
      console.error("Erro ao validar e-mail:", error);
      setStatus("erro");
    }
  };

  return (
    <Box component="footer" sx={{ color: "#bfb8b8", py: 6, mt: 8 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 6, md: 3 },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "40%" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 1,
                color: "#e4dede",
              }}
            >
              Assine nossa Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#bfb8b8" }}>
              Fique por dentro das novidades e ofertas exclusivas.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: { xs: 2, sm: 1.5 },
                maxWidth: { xs: "100%", md: 520 },
              }}
            >
              <TextField
                type="text"
                placeholder="Digite seu e-mail"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flex: 1,
                  width: { xs: "100%", sm: 360 },
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  "& fieldset": { border: "none" },
                  "& input": { padding: "10px 20px", borderRadius: "50px" },
                }}
                aria-label="Digite seu e-mail"
                required
              />

              <CustomButton version="newsletter" type="submit">
                Inscrever-se
              </CustomButton>
            </Box>

            {status && (
              <Typography
                variant="body2"
                sx={{
                  mt: 1.5,
                  color: status === "sucesso" ? "#00c6ff" : "#ff4d4f",
                }}
              >
                {status === "sucesso"
                  ? "E-mail inscrito com sucesso!"
                  : "E-mail inválido"}
              </Typography>
            )}
          </Box>

          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "25%" } }}>
            <FooterColumn title="Links rápidos" items={quickLinks} />
          </Box>

          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "25%" } }}>
            <FooterColumn title="Siga-nos" items={socialLinks} />
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6, color: "#777" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} WavePods. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
