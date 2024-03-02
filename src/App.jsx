import React from "react";
import Header from "./assets/componentes/Header.jsx";
import About from "./assets/componentes/about.jsx";
import Navbar from "./assets/componentes/Navbar.jsx";
import Proyectos from "./assets/componentes/Proyectos.jsx";
import Images from "./assets/Images/img";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./assets/Theme.jsx";
import { Box, Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        position={"absolute"}
        component={"picture"}
        sx={{ width: "100vw", height: "99.2vh", zIndex: -1 }}
      >
        <source media="(max-width: 800px)" srcSet={Images.backgroundMobile} />
        <img
          src={Images.backgroundDesktop}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Container
        maxWidth="false"
        sx={{ height: "100vh", width: "100vw", zIndex: 100 }}
      >
        <Navbar />
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
