import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Image from "../Images/img";
import React from "react";

export default function About() {
  return (
    <Box component="section" sx={{ display:{ xs: "grid", md: "flex"}, width: "100%", maxWidth: "100%" }}>
      <Box
        component="article"
        backgroundColor="background.default"
        sx={{
          padding: "5%",
          display: "grid",
          width: "50%",
          gap: "5%",
          justifyContent: "center",
        }}
      >
        <Box component="figure">
          <img src={Image.imgMain} alt="" />
        </Box>
        <Box component="ul" sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <IconButton color="text.secondary">
          <GitHubIcon fontSize="large" color="sure" />
        </IconButton>
        <IconButton color="text.secondary">
          <EmailIcon fontSize="large" color="sure" />
        </IconButton>
        <IconButton color="text.secondary">
          <InstagramIcon fontSize="large" color="sure" />
        </IconButton>
        </Box>
      </Box>
      <Box
        component="article"
        backgroundColor="background.paper"
        sx={{ padding: "5%", display: "grid", width: "50%",  }}
      >
        <Typography variant="h2" sx={{ color: "secondary.main", display: "flex", alignItems: "center", fontSize: { xs: "3rem", md: "3.2rem" } }}>
          {" "}
          <HorizontalRuleIcon
            sx={{
              color: "primary.main",
              paddingTop: "10px",
              alignItems: "center",
              fontSize: { xs: "2rem", md: "5rem" },
            }}
          />
          Sobre Mi
        </Typography>
        <Typography variant="p" color="secondary" sx={{ fontSize: { xs: "1rem", md: "1rem" } }}>
          Hola! Soy Desarrollador Web en Guatemala, y para mí, la esencia de la
          programación es la capacidad de añadir un toque mágico a cada sitio
          web. Disfruto aprendiendo nuevas tecnologías de JavaScript para
          innovar y mejorar la calidad de mis proyectos.
          <br /> <br />
          Actualmente, estoy en búsqueda de nuevos retos que me permitan seguir
          creciendo en este emocionante mundo del desarrollo web.
        </Typography>
        <Typography variant="h3">Skills</Typography>
        <Typography variant="h4">Lenguajes</Typography>
        <Typography variant="h4">Tecnologias</Typography>
      </Box>
    </Box>
  );
}
