import { Container, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

export default function Header() {
  return (
    <Container
        component={"header"}
        sx={{
          display: "grid",
          placeItems: "center",
          padding: "10% 0",
          height: "100vh",
          alignContent: "center",
          gap: "1rem",
        }}
    >
      <Typography
        variant="h4"
        component="span"
        display={"block"}
        align="center"
        fontWeight={"bold"}
        color={"text.secondary"}
      >
        Hola
        <Typography
          variant="h4"
          component="span"
          display={"inline"}
          color={"primary.main"}
        >
          .
        </Typography>
      </Typography>
      <Typography
        variant="h4"
        component="hgroup"
        align="center"
        fontWeight={"bold"}
        color={"primary.main"}
      >
        {"</"}
        <Typography
          variant="h4"
          component="span"
          align="center"
          color={"text.secondary"}
        >
          {"Soy "}
        </Typography>
        {"Alex Maldonado>"}
      </Typography>
      <Typography variant="h5" component="h1" align="center" color={"text.secondary"}>
        Desarrollador web en Guatemala
      </Typography>
        <GitHubIcon sx={{ color: "text.secondary", fontSize: "2rem" }} />
    </Container>
  );
}
