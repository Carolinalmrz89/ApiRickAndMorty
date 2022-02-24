import Tarjeta from "./Tarjeta";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

const Main = ({ busqueda }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, [busqueda]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          m: 4,
        }}
      >
        {personajes.map((personaje) => (
          <Tarjeta
            image={personaje.image}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            id={personaje.id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Main;
