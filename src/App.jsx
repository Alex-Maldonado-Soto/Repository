import React from "react";
import Header from "./assets/componentes/header.jsx";
import About from "./assets/componentes/about.jsx";
import Navbar from "./assets/componentes/Navbar.jsx";
import Proyectos from "./assets/componentes/proyectos.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./assets/Theme.jsx";
import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container maxWidth="false">
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
