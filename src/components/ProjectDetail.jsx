import { Box, Card, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <p>Project not found</p>;
  return (
    <Box sx={{ width: "100%" }}>
      <NavigationBar />
      <Button
        variant="text"
        size="large"
        onClick={() => window.history.back()}
        sx={{
          color: "#3a2f25",
          margin: "5rem",
          textTransform: "none",
          fontFamily: "quicksand",
          fontWeight: "bold",

          "&:hover": {
            backgroundColor: "transparent",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 2,
            width: "100%",
            height: "1.5px",
            backgroundColor: "#3a2f25",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          },

          "&:hover::after": {
            transform: "scaleX(1)",
          },
        }}
      >
        <ArrowBackIosIcon
          sx={{
            cursor: "pointer",
            color: "#3a2f25",
            fontSize: "1rem",
          }}
        />
        BACK TO COLLECTION
      </Button>

      <Card
        sx={{
          height: { sm: "auto", md: "90vh" },
          margin: "5rem",
          borderRadius: 4,
          mt: 4,
          border: "none",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
        }}
      >
        <Box component="img" src="/images/calm.png" />
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h3" sx={{ fontFamily: "quicksand" }}>
            {project.title}
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "quicksand" }}>
            {project.idea}
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "quicksand" }}>
            Design decisions
          </Typography>
          {project.designDecisions.map((decision, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{ fontFamily: "quicksand" }}
            >
              - {decision}
            </Typography>
          ))}
          <Typography variant="h6" sx={{ fontFamily: "quicksand" }}>
            Outcome
          </Typography>
          <Typography sx={{ fontFamily: "work sans" }}>
            {project.outcome}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
