import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const slides = [
  {
    image: '/images/calm.png',
    text: 'Calm when you need it',
  },
  {
    image: '/images/quirky.png',
    text: 'Quirky when you don’t',
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Design() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "95vh",
        paddingTop: "5rem",
      }}
    >
      <NavigationBar />
       <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      <AutoPlaySwipeableViews interval={4000} enableMouseEvents>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                textAlign: 'center',
                textShadow: '0 0 10px rgba(0,0,0,0.5)',
              }}
            >
              {slide.text}
            </Typography>
          </Box>
        ))}
      </AutoPlaySwipeableViews>

      <Box
        sx={{
          position: 'absolute',
          bottom: 80,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" color="white">
          Two moods. One studio.
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Explore the Collection
        </Button>
      </Box>
    </Box>
    {/* <Typography>
        Soft North is my visual journal. <br />I create calm, atmospheric art
        inspired by northern nature, quiet spaces, and soft emotion — designed
        to bring harmony into modern interiors and everyday life.
      </Typography>
      <Typography>But not everything has to be calm. Sometimes it’s fun, quirky, and unexpectedly playful — and that’s exactly the point.</Typography> */}  
    </Box>
  );
}
