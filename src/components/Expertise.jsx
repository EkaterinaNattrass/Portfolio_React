import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Expertise() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#f3f3f3" }}>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontWeight: "bold",
          color: "#2f2f53",
          fontSize: "2rem",
          p: "2rem",
        }}
      >
        &#47;&#47; EXPERTISE
      </Typography>
      <Box>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontWeight: "600",
          lineHeight: 2,
          color: "#2f2f53",
          fontSize: "1.2rem",
          p: "2rem",
        }}
      >
        Hello there! <hr style={{width:'10rem', textAlign:'left', marginLeft:0}}></hr> 
      </Typography> 
      </Box>
      <Box>
        <Typography>I'm a passionate web developer with a deep love for
        creating elegant and functional websites. <br /> My expertise lies in designing
        and crafting responsive and visually appealing websites using <span>Figma</span> for
        high fidelity prototypes and the latest web technologies such as 
        <span> Bootstrap,</span><span>Tailwind,</span> <span>MUI</span>  and  <span>React</span>. In my projects I also use Node.js
        and Express.js to build an efficient backend infrastructure. I have
        experience working with MongoDB, a NoSQL database. Feel free to explore
        my portfolio and get in touch to discuss your next project!</Typography>
      </Box>
      
    </Box>
  );
}
