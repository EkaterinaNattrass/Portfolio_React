import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Collection() {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <NavigationBar />
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{ height: "100%" }}
              onClick={() => navigate(`/collection/${project.id}`)}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.concept}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
