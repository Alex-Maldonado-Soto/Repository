import React from "react";
import Header from "./assets/componentes/header.jsx";
import About from "./assets/componentes/about.jsx";
import Navbar from "./assets/componentes/Navbar.jsx";
import Proyectos from "./assets/componentes/proyectos.jsx";
import Images from "./assets/Images/img";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./assets/Theme.jsx";
import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme} >
      <Container maxWidth="false" sx={{width: "100vw", height: "100vh", backgroundSize : "cover", backgroundPositionX: "center", backgroundImage: `url(${Images.backgroundMobile})`, objectFit: "cover" }}>
        <Navbar />
        <Header />
        <Button variant="contained" sx={{ fontWeight: "bold" }}>
          Contained
        </Button>
        <About />
        <Proyectos />
      </Container>
    </ThemeProvider>
  );
}

export default App;
