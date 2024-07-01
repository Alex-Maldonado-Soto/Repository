import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Image from "../Images/img";
import React from "react";
import { BorderAll } from "@mui/icons-material";
import img from "../Images/img";

export default function About() {
  const Figure = styled("figure")({
    width: "20vw",
    height: "80vh",
    margin: "0",
    padding: "0",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  });

  const Img = styled("img")({
    width: "100%",
  });

  const Caption = styled("figcaption")({
    textAlign: "center",
  });

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: "50% 50%",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Box
        component="article"
        backgroundColor="background.default"
        sx={{
          padding: "5%",
          display: "grid",
          gap: "5%",
          justifyContent: "center",
        }}
      >
        <Figure>
          <Img
          style={{ borderRadius: "100%" }}
            src={Image.imgContact}
            alt=""
          />
          <Caption>
            <IconButton color="text.secondary" aria-label="Link de mi GitHub">
              <GitHubIcon fontSize="large" color="sure" />
            </IconButton>
            <IconButton color="text.secondary" aria-label="Link de mi Email">
              <EmailIcon fontSize="large" color="sure" />
            </IconButton>
            <IconButton
              color="text.secondary"
              aria-label="Link de mi Instagram"
            >
              <InstagramIcon fontSize="large" color="sure" />
            </IconButton>
          </Caption>
        </Figure>
      </Box>
      <Box
        component="article"
        backgroundColor="background.paper"
        sx={{ padding: "5%", display: "grid" }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            display: "flex",
            alignItems: "center",
            fontSize: { xs: "3rem", md: "3.2rem" },
          }}
        >
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
        <Typography
          component="p"
          variant="p"
          color="secondary"
          sx={{ fontSize: { xs: "1rem", md: "1rem" }, padding: "5%" }}
        >
          Hola! Soy Desarrollador Web en Guatemala, y para mí, la esencia de la
          programación es la capacidad de añadir un toque mágico a cada sitio
          web. Disfruto aprendiendo nuevas tecnologías de JavaScript para
          innovar y mejorar la calidad de mis proyectos.
          <br /> <br />
          Actualmente, estoy en búsqueda de nuevos retos que me permitan seguir
          creciendo en este emocionante mundo del desarrollo web.
        </Typography>

        <Box
          component="ul"
          sx={{
            display: "flex",
            padding: "0",
            gap: "10px",
            justifyContent: "center",
          }}
        ></Box>
        <Typography variant="h4">Tecnologias</Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            padding: "0",
            gap: "10px",

            "& img": {
              width: "50px",
              height: "50px",
              margin: "10px",
            },
          }}
        >
          <Tooltip title="JavaScript">
            <Img src={Image.jslogo} alt="JavaScript" aria-label="JavaScript" />
          </Tooltip>
          <Tooltip title="HTML">
            <Img src={Image.htmllogo} alt="HTML" aria-label="HTML" />
          </Tooltip>
          <Tooltip title="CSS">
            <Img src={Image.csslogo} alt="CSS" aria-label="CSS" />
          </Tooltip>
          <Tooltip title="React">
            <Img src={Image.reactlogo} alt="React" aria-label="React" />
          </Tooltip>
          <Tooltip title="Sass">
            <Img src={Image.sasslogo} alt="Sass" aria-label="Sass" />
          </Tooltip>
          <Tooltip title="Git">
            <Img src={Image.gitlogo} alt="Git" aria-label="Git" />
          </Tooltip>
          <Tooltip title="Material UI">
            <Img
              src={Image.materialuilogo}
              alt="Material UI"
              aria-label="Material UI"
            />
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
