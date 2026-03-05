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
      <Container>
        <Card sx={{ borderRadius: 4, mt: 4, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)",}}>
          <Box
            component="img"
            src="/images/calm.png"
            sx={{ width: "100%", mb: 6,  }}
          />
          <Typography variant="h3" sx={{ fontFamily: 'work sans'}}>{project.title}</Typography>
          <Typography variant="h6" sx={{ fontFamily: 'work sans'}}>{project.idea}</Typography>
          <Typography variant="h6" sx={{ fontFamily: 'work sans'}}>Design decisions</Typography>
          {project.designDecisions.map((decision, index) => (
            <Typography key={index} variant="body1" sx={{ fontFamily: 'work sans'}}>
              - {decision}
            </Typography>
          ))}
          <Typography variant="h6" sx={{ fontFamily: 'work sans'}}>Outcome</Typography>
          <Typography sx={{ fontFamily: 'work sans'}}>{project.outcome}</Typography>
        </Card>
      </Container>
    </Box>
  );
}
