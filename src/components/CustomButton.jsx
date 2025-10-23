import Button from "@mui/material/Button";

const CustomButton = ({ variant = "comprar", children, ...props }) => {
  const styles = {
    comprar: {
      color: "#fff",
      background: "linear-gradient(90deg, #00bfff, #1e90ff)",
      px: 2,
      py: 1.5,
      borderRadius: 50,
      fontWeight: 600,
      fontSize: "0.9rem",
      boxShadow: "0 0 15px rgba(30, 144, 255, 0.6)",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 0 25px rgba(30, 144, 255, 0.9)",
        transform: "translateY(-2px)",
        background: "linear-gradient(90deg, #1e90ff, #00bfff)",
      },
    },
    outlined: {
      color: "#00c6ff",
      border: "2px solid #00c6ff",
      px: 2,
      py: 1.5,
      borderRadius: 50,
      fontWeight: 600,
      fontSize: "0.95rem",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 0 15px rgba(0, 198, 255, 0.6)",
        transform: "translateY(-2px)",
      },
    },
    newsletter: {
      color: "#00c6ff",
      border: "2px solid #00c6ff",
      px: 4,
      py: 1,
      borderRadius: 50,
      fontWeight: 600,
      fontSize: "0.9rem",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 0 15px rgba(0, 198, 255, 0.6)",
      },
    },
  };

  return (
    <Button sx={styles[variant]} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
