import { Box, Container, Typography } from "@mui/material";
import Image from "../Images/img";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function Header() {

//////Hya un bug con el margin fue lo que le quite al header, se traba y no funciona
/////Hay que centrarlo con flex box para que se puedan colocar las imagenes tambien

  return (
    <Container
      component={"header"}
      sx={{
        position: "relative",
        width: { xs: "100%", md: "100%", lg: "100%" },
        maxWidth: { xs: "100%", md: "100%", lg: "100%" },
        display: "flex",
        padding: { xs: "0", md: "0 5%" },
        placeItems: "center",
        justifyContent: "center",
        height: "90.5vh",
        alignContent: "center",
        margin: "0",
      }}
    >
      <Box
        component={"hgroup"}
        sx={{
          width: { xs: "100%", md: "100%" },
          textAlign: { xs: "center", md: "left" },
          justifyItems: { xs: "center", md: "left" },
        }}
        display={"grid"}
      >
        <Typography
          component="span"
          display={"block"}
          fontWeight={"bold"}
          color={"text.secondary"}
          fontSize={{ xs: "2rem", md: "4rem" }}
        >
          Hola
          <Typography
            component="span"
            display={"inline"}
            color={"primary.main"}
            fontSize={{ xs: "2rem", md: "4rem" }}
          >
            .
          </Typography>
        </Typography>
        <Typography
          component="hgroup"
          fontWeight={"bold"}
          color={"primary.main"}
          fontSize={{ xs: "2rem", md: "3rem" }}
        >
          {"</"}
          <Typography
            component="span"
            color={"text.secondary"}
            fontSize={{ xs: "2rem", md: "3rem" }}
          >
            {"Soy "}
          </Typography>
          {"Alex Maldonado>"}
        </Typography>
        <Typography component="h1" color={"text.secondary"}  fontSize={{ xs: "1.5rem", md: "2rem" }}>
          Desarrollador web en Guatemala
        </Typography>
        <GitHubIcon sx={{ color: "text.secondary", paddingTop: "10px" ,fontSize: { xs: "2rem", md: "3rem" } }} />
      </Box>

      <Box
        component={"picture"}
        sx={{
          width: { md: "100%" },
          height: { md: "100%" },
          display: { xs: "none", md: "block" },
        }}

      >
        <img
          src={Image.imgContact}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

    </Container>
  );
}
