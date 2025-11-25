import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function Canceled() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 3, textAlign: "center", borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <CancelIcon sx={{ fontSize: 70, color: "error.main", mb: 2 }} />

          <Typography variant="h4" fontWeight={600} gutterBottom>
            Compra não finalizada
          </Typography>

          <Typography sx={{ mb: 3 }}>
            A operação foi cancelada antes da confirmação. Nenhuma cobrança foi
            realizada.
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/"
            size="large"
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Voltar para a loja
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Canceled;
