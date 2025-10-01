import { Box, Typography, Button, Container } from "@mui/material";
import Wavebg from "../img/wavebg.jpg";

const ContentMain = () => {
  return (
    <Box
      id="inicio"
      aria-label="Apresentação dos WavePods"
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: `url(${Wavebg}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      />

      <Container
        disableGutters
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          pl: { xs: 3, md: 10 },
          pr: { xs: 2, md: 0 },
          ml: 2,
          pt: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "600px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
              lineHeight: 1.1,
              letterSpacing: "0.03em",
              mb: 3,
            }}
          >
            Experimente o<br />
            futuro do som
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.9)",
              fontWeight: 400,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2.5,
            }}
          >
            Tecnologia premium com conforto absoluto
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              lineHeight: 1.6,
              letterSpacing: "0.3px",
              maxWidth: "500px",
              mb: 5,
            }}
          >
            Cancelamento ativo de ruído de 40 dB | Áudio de alta fidelidade |
            Conexão Bluetooth 5.3 | Bateria de 30 horas
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              href="#comprar"
              sx={{
                color: "#fff",
                px: 2,
                py: 1.5,
                fontWeight: 600,
                borderRadius: "50px",
                background: "linear-gradient(90deg, #00bfff, #1e90ff)",
                textTransform: "none",
                boxShadow: "0 0 15px rgba(30, 144, 255, 0.6)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 0 25px rgba(30, 144, 255, 0.9)",
                  transform: "translateY(-2px)",
                  background: "linear-gradient(90deg, #1e90ff, #00bfff)",
                },
              }}
            >
              Comprar agora
            </Button>

            <Button
              href="#features"
              sx={{
                color: "#00c6ff",
                background: "transparent",
                border: "2px solid #00c6ff",
                borderRadius: "50px",
                px: 2,
                py: 1.5,
                fontWeight: 600,
                fontSize: "0.95rem",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#00c6ff",
                  boxShadow: "0 0 15px rgba(0, 198, 255, 0.6)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Ver especificações
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContentMain;
