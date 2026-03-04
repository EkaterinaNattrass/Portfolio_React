import React from "react";
import { Box, Typography } from "@mui/material";

export default function Collection() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Collection Page
      </Typography>
      <Typography variant="body1">
        This is where the collection content will go. You can add images, text, or any other components here to showcase your work.
      </Typography>
    </Box>
  );
}