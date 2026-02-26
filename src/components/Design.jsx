import * as React from "react";
import { Box, Typography } from "@mui/material";
import NavigationBar from "./NavigationBar";

export default function Design() {
  return (
   <Box sx={{ width: "100%", display: "flex", height: "95vh", paddingTop: '5rem', }}>
       <NavigationBar /> 
       
      </Box>
  );
}