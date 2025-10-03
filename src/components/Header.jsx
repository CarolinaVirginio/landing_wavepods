import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Headphones } from "lucide-react";

const links = [
  { label: "Login", href: "/login" },
  { label: "Cadastro", href: "/cadastro" },
];
const Header = () => {
  return (
    <AppBar
      position="fixed"
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
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Headphones size={32} strokeWidth={2.2} color="#fff" />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "#fff",
              letterSpacing: "0.08rem",
              fontWeight: 700,
            }}
          >
            WavePods
          </Typography>
        </Box>

        <nav>
          {links.map((item) => (
            <Box
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                color: "#fff",
                mr: 3,
                fontWeight: 500,
                letterSpacing: "0.05rem",
                transition: "color 0.3s",
                "&:hover": {
                  color: "#00bfff",
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </nav>

        <Button
          sx={{
            color: "#fff",
            background: "linear-gradient(90deg, #00bfff, #1e90ff)",
            px: 2,
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
