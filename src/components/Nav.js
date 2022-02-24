import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HP Web
          </Typography>

          <Link to="/">Personajes</Link>
          <Link to="/episodios">Episodios</Link>
          <Link to="/ubicaciones">Ubicaciones</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
