import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "../Theme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

<<<<<<< HEAD
  ///////Hay que crear un componente con emotion para hacer un navbar list y que no tenga tantos divs inecesarios

  const NavList = styled("li") ({
    textAlign: "center",
    padding: "10px 0",
    color: Theme.palette.text.secondary,

    "&:hover": {
      color: Theme.palette.primary.main
    }
  })
>>>>>>> 9031c855dcc96d4ef49b7372d4701ff729015050

  return (
    <Box
      component={"nav"}
      position="absolute"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 0 0 5%",
        width: "90vw",
      }}
    >
      <Typography
        variant="span"
        sx={{ color: "text.secondary", fontFamily: "Montserrat", fontWeight: "bold", fontSize: { md: "1.2rem", lg: "1.4rem" } }}
      >
        MALDEXANDER
      </Typography>
      <IconButton
        onClick={() => setOpenNav(!openNav)}
        sx={{color : "text.secondary", display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <List sx={{ display: { xs: "none", md: "flex" }, gap: "5rem", fontSize: { md: "1.2rem", lg: "1.4rem" } }}>
        <NavList>Inicio</NavList>
        <NavList>Conoceme</NavList>
        <NavList>Portafolio</NavList>
      </List>
      <Drawer
        component={"nav"}
        open={openNav}
        anchor="right"
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
        <IconButton
            color="primary"
            onClick={() => setOpenNav(!openNav)}
            sx={{ justifyContent: "end" }}
          >
            <CloseIcon />
          </IconButton>
          <List sx={{ padding: "40px", textAlign: "left", fontSize: { xs: "1.2rem", sm: "1.6rem"} }}>
            <NavList>Inicio</NavList>
            <NavList>Conoceme</NavList>
            <NavList>Portafolio</NavList>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
