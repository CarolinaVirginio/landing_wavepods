import { Box, Typography, Button, Container } from "@mui/material";

export default function BuySection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{ textAlign: "center", px: { xs: 2, md: 0 } }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "0.875rem",
            color: "#e4dede",
            letterSpacing: "0.125rem",
            mb: 1.5,
            textTransform: "uppercase",
          }}
        >
          Mais que um produto, uma experiência
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#bfb8b8",
            mb: 4,
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Pronto para transformar sua experiência musical?
        </Typography>

        <Button
          sx={{
            color: "#fff",
            background: "linear-gradient(90deg, #00bfff, #1e90ff)",
            px: 2.5,
            py: 1.5,
            fontWeight: 600,
            borderRadius: 50,
            boxShadow: "0 0 15px rgba(30, 144, 255, 0.6)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 0 25px rgba(30, 144, 255, 0.9)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Comprar
        </Button>
      </Container>
    </Box>
  );
}
