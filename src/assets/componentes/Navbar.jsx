import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  // Estado para controlar la apertura del menú de navegación
  const [openNav, setOpenNav] = useState(false);

  /////// Hay que crear un componente con emotion para hacer un navbar list y que no tenga tantos divs innecesarios

  // Componente estilizado para los elementos de la lista de navegación
  const NavList = styled("li")({
    textAlign: "center",
    padding: "10px 0",
    color: Theme.palette.text.secondary,

    "&:hover": {
      color: Theme.palette.primary.main,
    },
  });

  return (
    // Contenedor principal de la barra de navegación
    <Box
      component={"nav"}
      position="absolute"
      sx={{
        padding: "0 5%",
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "10vh",
      }}
    >
      {/* Título de la barra de navegación */}
      <Typography
        variant="span"
        sx={{
          color: "text.secondary",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: { md: "1.2rem", lg: "1.4rem" },
        }}
      >
        MALDEXANDER
      </Typography>
    </Box>
  );
}
