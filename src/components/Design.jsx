import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
      <NavigationBar />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSlideChange={(swiper) => {
          // stop autoplay on last slide
          if (swiper.activeIndex === slides.length - 1) {
            swiper.autoplay.stop();
          }
        }}
        style={{ height: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {slide.type === "image" ? (
              <Box
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
                  variant="h3"
                  sx={{
                    color: "white",
                    textAlign: "center",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                    fontFamily: "quicksand",
                  }}
                >
                  {slide.text}
                </Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#3a2f25",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" sx={{ mb: 3, color: "white", fontFamily: "quicksand", }}>
                  {slide.text}
                </Typography>

                {slide.showCTA && (
                  <Button
                    variant="text"
                    size="large"
                    onClick={() => navigate("/collection")}
                    sx={{
                      color: "white",
                      position: "relative",
                      textTransform: "none",
                      fontFamily: "quicksand",
                      fontSize: { xs: "0.5rem", sm: "1rem" },

                      "&:hover": {
                        backgroundColor: "transparent",
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 2,
                        width: "100%",
                        height: "1px",
                        backgroundColor: "white",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition:
                          "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                      },

                      "&:hover::after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    BEHIND THE DESIGN
                    <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "small" }} />
                  </Button>
                )}
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
