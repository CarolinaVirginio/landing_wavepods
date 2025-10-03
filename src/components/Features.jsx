import { Box, Typography } from "@mui/material";
import { Volume2, Headphones, Battery, Droplet } from "lucide-react";

const featuresData = [
  {
    id: "sound",
    icon: <Volume2 size={20} color="#e4dedeff" />,
    title: "Qualidade de Som Premium",
    description:
      "Graves profundos, agudos nítidos, cada nota reproduzida com precisão.",
    ariaLabel: "Som Premium",
  },
  {
    id: "noise",
    icon: <Headphones size={20} color="#e4dedeff" />,
    title: "Cancelamento Ativo de Ruído",
    description: "Total imersão na música, sem interferência do ambiente.",
    ariaLabel: "Cancelamento de ruído",
  },
  {
    id: "battery",
    icon: <Battery size={20} color="#e4dedeff" />,
    title: "Bateria Duradoura",
    description:
      "Até 30h de reprodução contínua, para não se preocupar em recarregar.",
    ariaLabel: "Bateria Duradoura",
  },
  {
    id: "water",
    icon: <Droplet size={20} color="#e4dedeff" />,
    title: "Resistência à Água e Suor",
    description: "Ideal para treinos, corridas e uso diário.",
    ariaLabel: "Resistência à Água e Suor",
  },
];

const FeatureItem = ({ icon, title, description, ariaLabel }) => (
  <Box
    component="section"
    aria-label={ariaLabel}
    sx={{
      backgroundColor: "#1a1a1a",
      color: "#e4dedeff",
      borderRadius: 2,
      p: 3,
      maxWidth: "280px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "translateX(-5px)",
      },
      textAlign: "center",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#000",
        borderRadius: 50,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 1,
        mx: "auto",
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" color="grey.400">
      {description}
    </Typography>
  </Box>
);

const Features = () => (
  <Box
    component="section"
    id="features"
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 2.5,
      justifyContent: "center",
      px: 5,
      py: 5,
    }}
  >
    {featuresData.map((feature) => (
      <FeatureItem key={feature.id} {...feature} />
    ))}
  </Box>
);

export default Features;
