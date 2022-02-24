import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Tarjeta = ({ image, name, id }) => {
  return (
    <Box>
      <Link to={`/detallesPersonajes/${id}`}>
        <Card
          sx={{
            width: 300,
            height: 400,
            m: 2,
            bgcolor: "black",
            color: "white",
          }}
        >
          <CardContent>
            <CardMedia height="280" component="img" image={image} />
            <Typography variant="h6">{name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default Tarjeta;
