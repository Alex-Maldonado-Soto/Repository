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
      position="sticky"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 5%",
      }}
    >
      <Typography
        variant="span"
        sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
      >
        MALDEXANDER
      </Typography>
      <IconButton
        onClick={() => setOpenNav(!openNav)}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <List sx={{ display: { xs: "none", sm: "flex" } }}>
        <ListItem>
          <ListItemButton sx={{ color: "text.pimary" }}>Inicio</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ color: "text.pimary" }}>
            Conoceme
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ color: "text.pimary" }}>
            Portafolio
          </ListItemButton>
        </ListItem>
      </List>
      <Drawer
        component={"nav"}
        open={openNav}
        anchor="right"
        sx={{ display: { sm: "none" } }}
      >
        <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
          <IconButton
            color="primary"
            onClick={() => setOpenNav(!openNav)}
            sx={{ justifyContent: "end" }}
          ></IconButton>
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
