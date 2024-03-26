import React from "react";
import Header from "./assets/componentes/Header.jsx";
import About from "./assets/componentes/About.jsx";
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
        position={"fixed"}
        component={"picture"}
        sx={{
          height: "100vh",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source media="(max-width: 900px)" srcSet={Images.backgroundMobile} />
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
      <Box
        maxWidth="false"
        sx={{zIndex: 100}}
      >
        <Navbar />
        <Header />
        <About />
      </Box>

      
    </ThemeProvider>
  );
}

export default App;
