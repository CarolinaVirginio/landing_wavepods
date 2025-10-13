import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";

const quickLinks = ["Sobre nós", "Suporte", "Política de privacidade"];
const socialLinks = ["Instagram", "Facebook", "Twitter"];

const FooterColumn = ({ title, items }) => (
  <Box>
    <Typography
      variant="h6"
      sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#e4dedeff", mb: 2 }}
    >
      {title}
    </Typography>
    {items.map((item) => (
      <Typography
        key={item}
        variant="body2"
        sx={{ mb: 1, cursor: "pointer", "&:hover": { color: "#00bfff" } }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        color: "#bfb8b8",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 8 } }}>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 1,
                color: "#e4dedeff",
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
                gap: 1.5,
                maxWidth: { xs: "100%", md: 500 },
              }}
            >
              <TextField
                type="email"
                placeholder="Digite seu e-mail"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  flex: 1,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  "& fieldset": { border: "none" },
                  "& input": { padding: "10px 16px", borderRadius: "50px" },
                }}
              />
              <Button
                type="submit"
                sx={{
                  background: "transparent",
                  border: "2px solid #00c6ff",
                  color: "#00c6ff",
                  borderRadius: 50,
                  px: 4,
                  py: 1,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#00c6ff",
                    boxShadow: "0 0 15px rgba(0, 198, 255, 0.6)",
                  },
                }}
              >
                Inscrever-se
              </Button>
            </Box>

            {submitted && (
              <Typography variant="body2" sx={{ mt: 1.5, color: "#00c6ff" }}>
                E-mail inscrito com sucesso!
              </Typography>
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <FooterColumn title="Links rápidos" items={quickLinks} />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <FooterColumn title="Siga-nos" items={socialLinks} />
          </Grid>
        </Grid>

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
