import * as React from "react";
import { Box, } from "@mui/material";
import NavigationBar from "./NavigationBar";


export default function Profile() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#3a2f25" , }}>
      <NavigationBar />
    <Box component="img" src="/images/MJlogo.png" alt="logo" sx={{ height: "100vh",}} />
    </Box>
  );
}
