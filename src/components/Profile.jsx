import * as React from "react";
import { Box, } from "@mui/material";

export default function Profile() {
  return (
    <Box sx={{ width: "100%", display: "flex", height: "95vh", paddingTop: '5rem', }}>
       <img
        src="images/Card.jpg"
        alt="logo"
        style={{ height: '80vh', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', }} 
      />
     
    </Box>
  );
}
