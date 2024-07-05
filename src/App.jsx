import React from "react";
import Header from "./assets/componentes/Header.jsx";
import About from "./assets/componentes/About.jsx";
import Navbar from "./assets/componentes/Navbar.jsx";
import Proyectos from "./assets/componentes/Proyectos.jsx";
import Images from "./assets/Images/img";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./assets/Theme.jsx";
import { Box } from "@mui/material";

function App() {
  return (
    // ThemeProvider proporciona el tema personalizado a todos los componentes dentro de la aplicación
    <ThemeProvider theme={Theme}>
      
      {/* Box que actúa como fondo fijo de la aplicación */}
      <Box
        position={"fixed"}
        component={"picture"}
        sx={{
          height: "100vh", // Altura completa de la ventana
          width: "100%", // Ancho completo de la ventana
          top: 0,
          left: 0,
          zIndex: -1, // Posiciona el fondo detrás de otros elementos
        }}
      >
        {/* Cambia la imagen de fondo según el tamaño de la pantalla */}
        <source media="(max-width: 900px)" srcSet={Images.backgroundMobile} />
        <img
          src={Images.backgroundDesktop}
          alt=""
          style={{
            width: "100%", // Ancho completo de la imagen
            height: "100%", // Altura completa de la imagen
            objectFit: "cover", // La imagen cubre todo el contenedor
            objectPosition: "center", // La imagen se centra en el contenedor
          }}
        />
      </Box>

      {/* Contenedor principal para el contenido de la aplicación */}
      <Box maxWidth="false" sx={{ zIndex: 100 }}>
        {/* Componentes de la aplicación */}
        <Navbar />
        <Header />
        <About />
      </Box>
    </ThemeProvider>
  );
}

export default App;
