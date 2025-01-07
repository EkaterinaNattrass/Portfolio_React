import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function About() {
  const wordArray = [
    "...",
    "...",
    "Figma",
    "Bootstrap",
    "Tailwind",
    "MUI",
    "Typescript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];
  const [currentWord, setCurrentWord] = useState(wordArray[0]);
  const [isActive, setIsActive] = useState(true);
  const index = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        index.current++;
        setCurrentWord(wordArray[index.current]);

        if (index.current === wordArray.length - 1) {
          setIsActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, wordArray]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          index.current = -1;
          setCurrentWord("");
          setIsActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#f3f3f3",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('images/Geometry1.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "15rem",
            height: "15rem",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontWeight: "600",
              lineHeight: 2,
              color: "#4e597b",
              fontSize: "3rem",
              p: "2rem",
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            Hello there!
          </Typography>
        </Box>
      </Box>

      <Box>
        <Avatar
          alt="Ekaterina Nattrass"
          src="images/Photo.jpg"
          sx={{ width: 150, height: 150 }}
        />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontWeight: "400",
            lineHeight: 2,
            color: "#4e597b",
            fontSize: "1.5rem",
            p: "2rem",
          }}
        >
          I'm Ekaterina, a passionate web developer with a deep love for
          creating elegant and functional websites. <br /> My expertise lies in
          designing and crafting websites using <span>{currentWord}</span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontWeight: "400",
            lineHeight: 2,
            color: "#4e597b",
            fontSize: "1.2rem",
            p: "2rem",
          }}
        >
          Feel free to explore my portfolio and get in touch to discuss your
          next project!
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "15rem",
          height: "15rem",
          backgroundImage: "url('images/Geometry2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Box></Box>
    </Box>
  );
}
