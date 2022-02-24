import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const DetalleTarjeta = () => {
  const params = useParams();

  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
      });
  });

  return (
    <Box>
      <Card
        sx={{ width: 300, height: 400, m: 2, bgcolor: "black", color: "white" }}
      >
        <CardContent>
          <CardMedia height="280" component="img" image={personaje.image} />
          <Typography variant="h6">{personaje.name}</Typography>
          <Typography variant="body2">{personaje.species}</Typography>
          <Typography variant="body2">{personaje.status}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetalleTarjeta;
