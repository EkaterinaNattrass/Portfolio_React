import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Collection() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box>
      <NavigationBar />
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
          padding: "2rem",
        }}
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.id}>
            <Card
              sx={{
                borderRadius: 4,
                mt: 4,
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                "&:hover": {
                  backgroundColor: "action.hover",
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate(`/collection/${project.id}`)}
            >
              <CardActionArea
                onClick={() => setSelectedCard(project.id)}
                data-active={selectedCard === project.id ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: "work sans" }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "work sans" }}
                  >
                    {project.concept}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
