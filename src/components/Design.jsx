import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import SwipeableViews from "react-swipeable-views";

const slides = [
  {
    type: "image",
    image: "/images/calm.png",
    text: "Calm when you need it",
  },
  {
    type: "image",
    image: "/images/quirky.png",
    text: "Quirky when you don’t",
  },
  {
    type: "box",
    text: "Two moods. One studio.",
    showCTA: true,
  },
];

export default function Design() {
  const [index, setIndex] = useState(0);

  // Auto-advance slides until last one
  useEffect(() => {
    if (index < slides.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 3000); // 4s interval
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <NavigationBar />
      <SwipeableViews
        index={index}
        onChangeIndex={(i) => setIndex(i)}
        enableMouseEvents
      >
        {slides.map((slide, i) => {
          if (slide.type === "image") {
            return (
              <Box
                key={i}
                sx={{
                  height: "100vh",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.text}
                </Typography>
              </Box>
            );
          } else if (slide.type === "box") {
            return (
              <Box
                key={i}
                sx={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#f5f5f5",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {slide.text}
                </Typography>
                {slide.showCTA && (
                  <Button variant="contained" size="large">
                    Explore the Collection
                  </Button>
                )}
              </Box>
            );
          }
          return null;
        })}
      </SwipeableViews>
    </Box>
  );
}
