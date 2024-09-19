import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  List,
  CardMedia,
  Typography,
  CircularProgress,
  CardContent,
  Button,
  Card,
  CardHeader,
  CardActions,
} from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Proyectos = () => {
  // State para guardar los repositorios
  const [repos, setRepos] = useState([]);
  // State para controlar el estado de carga
  const [loading, setLoading] = useState(true);
  // State para controlar los errores
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Petición de los repositorios de GitHub
        const response = await axios.get(
          "https://api.github.com/users/Alex-Maldonado-Soto/repos"
        );
        setRepos(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error); // Manejo de errores
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <CircularProgress />; // Mostrar spinner mientras se cargan los datos

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>; // Mostrar mensaje de error si ocurre

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h2"
        sx={{
          color: "sure.main",
          display: "flex",
          justifyContent: "center",
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
        Proyectos
      </Typography>
      <List
        component={"ul"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 2,
        }}
      >

        {repos.map((repo) => (
          <Card
            component={"li"}
            key={repo.id}
            sx={{
              width: { sm: "80vw", md: "49%" },
              height: { xs: "60vh"},
              maxHeight: {sm: "40vh"},
              display: "grid",
              
              gridTemplateColumns: {
                xs: "80vw",
                sm: "40% 60%",
              },
              gridTemplateRows: {
                xs: "20% 40% 40%",
                sm: "20% 80%",
              },
              p: 1.5,
            }}
          >
            <CardHeader
              title={repo.name}
              sx={{
                width: "100%",
                gridRow: 1,
                gridColumnStart: 1,
                gridColumnEnd: {xs: 1, sm: 3},
                textAlign: "left",
              }}
            ></CardHeader>
            <CardMedia
              sx={{ width: "100%", height: "100%", gridColumn: 1, gridRow: 2 }}
              component="img"
              alt=""
              image={"https://github.com/Alex-Maldonado-Soto/"+ repo.name +"/blob/main/"+ repo.name +".JPG?raw=true" }
            />
            <CardContent
              sx={{
                display: "grid",
                alignContent: "space-between",
                justifyContent: "start",
                justifyItems: "start",
                textAlign: "justify",
                gridTemplateRows: "80% 10%",
                padding: "5px",
              }}
            >
              <Typography
                component="p"
                sx={{
                  textAlign: "left",
                  overflowY: "auto",
                  scrollbehavior: "smooth",
                }}
              >
                {repo.description}
              </Typography>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  href={repo.html_url}
                >
                  Repositorio
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href={"https://alex-maldonado-soto.github.io/" + repo.name}
                >
                  Web
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default Proyectos;
