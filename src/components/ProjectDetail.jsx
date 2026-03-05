import { Box, Container, Card, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <p>Project not found</p>;
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <NavigationBar />
      <Container >
        <Card>
          <Box
            component="img"
            src="/images/calm.png"
            sx={{ width: "100%", mb: 6 }}
          />
          <Typography variant="h3">{project.title}</Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {project.concept}
          </Typography>
          <Typography variant="h6">Idea</Typography>
          <Typography>
            A more detailed explanation of the project idea, including the
          </Typography>
          <Typography variant="h6">Design decisions</Typography>

          <ul>
            <li>Muted palette to reduce visual noise</li>
            <li>Negative space to create calm</li>
            <li>Soft typography to support the mood</li>
          </ul>
          <Typography variant="h6">Outcome</Typography>
          <Typography>
            Designed for modern interiors and quiet daily moments.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
