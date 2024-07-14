import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Typography,
  CircularProgress,
  CardContent,
  Button,
  Card,
  CardHeader,
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
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-around", gap: 2 }}
      >
        {repos.map((repo) => (
          <Card component={"li"} key={repo.id} sx={{ p: 2, width: { xs: "100%", md: "30%"}}}>
            <CardMedia
              component="img"
              alt=""
              height="100"
              image="https://via.placeholder.com/50"
            />
            <CardHeader
              title={repo.name}>
              </CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {repo.description}
              </Typography>
              <Button variant="contained" href={repo.html_url} target="_blank">Ver Repo</Button>
              <Button variant="contained" href={"https://alex-maldonado-soto.github.io/" + repo.name} target="_blank">Ver Proyecto</Button>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default Proyectos;
