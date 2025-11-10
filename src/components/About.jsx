import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        textAlign: "center",
        padding: "5rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Meow Script",
          fontWeight: "400",
          lineHeight: 2,
          color: "#545454",
          fontSize: "3rem",
        }}
      >
        I’m Ekaterina, a certified dog trainer who believes that <span style={{fontWeight: 'bold'}}>understanding,</span>
       <span style={{fontWeight: 'bold'}}>patience,</span>  and <span style={{fontWeight: 'bold'}}>consistency</span> are the keys to lasting results. <br />
        My approach combines science-based methods, focusing on creating calm,
        confident dogs and relaxed owners.
        <br />I address spesific challenges like reactivity, separation anxiety,
        and fear-based behaviors. <br />
        My goal isn’t just to train your dog — it’s to help you both communicate
        and live in harmony.
      </Typography>
    </Box>
  );
}
