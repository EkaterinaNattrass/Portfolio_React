import * as React from "react";
import { Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

export default function Profile() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        position: "relative",
        backgroundColor: "#3a2f25",
        overflow: "hidden",
      }}
    >
      <NavigationBar
        sx={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 2 }}
      />
      <Box
        component="img"
        src="/images/MJlogo.png"
        alt="logo"
        sx={{
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          width: "100%",
        }}
      />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
          },
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
            fontWeight: "bold",
            fontFamily: "Quicksand",
            opacity: 0.8,

            animation: {
              xs: "slideInCenter 3s ease forwards",
              md: "slideInLeft 3s ease forwards",
            },
          }}
        >
          Frontend Precision <br /> AI Creativity
        </Typography>

        <style>
          {`
      @keyframes slideInCenter {
        0% {
          transform: translateY(20px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes slideInLeft {
        0% {
          transform: translateX(-100%);
          opacity: 0.8;
        }
        100% {
          transform: translateX(50px);
          opacity: 1;
        }
      }
    `}
        </style>
      </Box>  <IconButton
        component="a"
        href="https://www.instagram.com/softnorth_/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 120,
          color: "white",
          zIndex: 10,
          "&:hover": {
            transform: "scale(1.15)",
            transition: "transform 0.2s ease",
          },
        }}
      >
        {" "}
        <InstagramIcon
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}
        />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/EkaterinaNattrass"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 70,
          color: "white",
          zIndex: 10,
          "&:hover": {
            transform: "scale(1.15)",
            transition: "transform 0.2s ease",
          },
        }}
      >
        <GitHubIcon
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}
        />
      </IconButton>{" "}
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ekaterina-nattrass-4b4336298/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          color: "white",
          zIndex: 10,
          "&:hover": {
            transform: "scale(1.15)",
            transition: "transform 0.2s ease",
          },
        }}
      >
        <LinkedInIcon
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}
        />
      </IconButton>
    
    </Box>
  );
}
