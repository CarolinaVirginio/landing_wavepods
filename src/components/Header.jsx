import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Headphones } from "lucide-react";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        background: "rgba(10, 10, 10, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        px: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Box
          aria-label="Logo WavePods"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <Headphones size={30} strokeWidth={2.2} color="#3a93c0ff" />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              letterSpacing: "0.08em",
              fontWeight: 700,
              color: "#3a93c0ff",
            }}
          >
            WavePods
          </Typography>
        </Box>

        <nav>
          {["Login", "Cadastro"].map((item) => (
            <Box
              key={item}
              component="a"
              href={`/${item.toLowerCase()}`}
              sx={{
                color: "#3a93c0ff",
                textDecoration: "none",
                mr: 3,
                fontWeight: 500,
                letterSpacing: "0.05em",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </nav>

        <Button
          sx={{
            px: 3,
            py: 1.2,
            fontWeight: 600,
            borderRadius: "50px",
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
