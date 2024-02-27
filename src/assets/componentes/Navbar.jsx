import React, { useState } from "react";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

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
        width: "80vw",
      }}
    >
      <Typography
        variant="span"
        sx={{ color: "text.secondary", fontFamily: "Montserrat", fontWeight: "bold" }}
      >
        MALDEXANDER
      </Typography>
      <IconButton
        onClick={() => setOpenNav(!openNav)}
        sx={{color : "text.secondary", display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <List sx={{ display: { xs: "none", md: "flex" } }}>
        <ListItem>
          <ListItemButton sx={{ color: "text.secondary" }}>Inicio</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ color: "text.secondary" }}>
            Conoceme
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ color: "text.secondary" }}>
            Portafolio
          </ListItemButton>
        </ListItem>
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
          <List>
            <ListItem>
              <ListItemButton sx={{ color: "text.secondary" }}>
                Inicio
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ color: "text.secondary" }}>
                About Me
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ color: "text.secondary" }}>
                Portafolio
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
