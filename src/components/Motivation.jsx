import { Box, Typography, Container } from "@mui/material";
import premiumSound from "../img/premiumSound.jpg";
import headphoneDetail from "../img/headphoneDetail.jpg";
import blueDetail from "../img/blueDetail.jpg";
const motivationsData = [
  {
    id: "motivation-1",
    title: "Deixe a música te levar mais longe",
    text: "Com sons que se adaptam ao seu ritmo, cada momento vira uma experiência única. Feche os olhos e se transporte para outro mundo.",
    img: premiumSound,
  },
  {
    id: "motivation-2",
    title: "Concentre-se apenas no que importa",
    text: "Seja no trabalho, nos estudos ou no treino, mergulhe de cabeça no que está fazendo. O resto desaparece, e você fica no controle da sua própria vibe.",
    img: headphoneDetail,
  },
  {
    id: "motivation-3",
    title: "Energia para acompanhar seu dia",
    text: "De manhã à noite, seus momentos ganham trilha sonora sem interrupções. Mais liberdade, mais intensidade, sem se preocupar em parar.",
    img: blueDetail,
  },
];
const MotivationItem = ({ title, text, img, reverse }) => (
  <Container
    component="section"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
      py: { xs: 6, md: 10 },
      gap: 4,
      maxWidth: 1200,
    }}
  >
    <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: "bold",
          mb: 2,
          color: "#e4dedeff",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.6,
          color: "#aeacacff",
        }}
      >
        {text}
      </Typography>
    </Box>

    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        mt: { xs: 3, md: 0 },
      }}
    >
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: "100%",
          maxWidth: 500,
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      />
    </Box>
  </Container>
);
const Motivation = () => (
  <>
    {motivationsData.map((item, index) => (
      <MotivationItem key={item.id} {...item} reverse={index % 2 !== 0} />
    ))}
  </>
);
export default Motivation;
