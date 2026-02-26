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
      left: 0,
      top: 0,
      zIndex: 0,
    }}
  />

  {/* Animated text on top */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    }}
  >
    <Typography
      sx={{
        color: "white",
        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
        fontWeight: "bold",
        fontFamily: "Quicksand",
        position: "absolute",
        whiteSpace: "nowrap",
        animation: "slideIn 4s ease forwards", // slower, only once
        opacity: 0.8, // initial opacity
      }}
    >
      Frontend Precision <br /> AI Creativity
    </Typography>

    <style>
      {`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0.8; /* start more visible */
          }
          100% {
            transform: translateX(50px); /* end slightly right */
            opacity: 1;
          }
        }
      `}
    </style>
  </Box>
</Box>

  );
}
