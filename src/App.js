import Nav from "./components/Nav";
import Search from "./components/Search";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Episodios from "./components/Episodios";
import Ubicaciones from "./components/Ubicaciones";
import DetalleTarjeta from "./components/DetalleTarjeta";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(valorDelInput);
    setBusqueda(valorDelInput);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Search handleChange={handleChange} handleClick={handleClick} />
      </Box>
      {/* <Main busqueda={busqueda} /> */}

      <Routes>
        <Route path="/" element={<Main busqueda={busqueda} />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route
          path="/detallesPersonajes/:idPersonaje"
          element={<DetalleTarjeta />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
