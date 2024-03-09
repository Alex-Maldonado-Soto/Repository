import { Box, Container, Typography } from "@mui/material";
import Images from "../Images/img";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function Header() {
  return (
    <Container
      component={"header"}
      sx={{
        display: "grid",
        padding: "10% 0",
        alignItems: "center",
        placeItems: "center",
        height: "100vh",
        alignContent: "center",
        gap: "1rem",
      }}
    >
      <Box>
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
        <Typography
          variant="h5"
          component="h1"
          align="center"
          color={"text.secondary"}
        >
          Desarrollador web en Guatemala
        </Typography>
        <GitHubIcon
          sx={{ color: "text.secondary", fontSize: "2rem", width: "100%" }}
        />
      </Box>
      <Box
        position={"absolute"}
        component={"picture"}
        sx={{ width: "100vw", height: "99vh", zIndex: -1 }}
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
    </Container>
  );
}
