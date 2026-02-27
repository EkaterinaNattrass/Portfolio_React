import * as React from "react";
import { Box, Typography} from "@mui/material";
import NavigationBar from "./NavigationBar";


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
  {/* Navigation bar */}
  <NavigationBar sx={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 2 }} />

  {/* Hero image fixed to left */}
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

  {/* Animated text on top */}
  <Box
  sx={{
    flex: 1,
    display: "flex",
    justifyContent: {
      xs: "center",  // 📱 phone
      sm: "center",  // 📱 tablet
      md: "flex-start", // 💻 desktop
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
</Box>
</Box>

  );
}
