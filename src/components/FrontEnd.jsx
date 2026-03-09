import * as React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import NavigationBar from "./NavigationBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { websites } from "../data/websites";

export default function FrontEnd() {
  const MotionBox = motion(Box);
  const MotionCard = motion(Card);

  const boxVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    rest: {},
    hover: {},
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 0.45 },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.04 },
  };

  const cardVariants = {
    rest: {
      y: 400,
      opacity: 0.9,
    },
    hover: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        scrollBehavior: "smooth",
      }}
    >
      <NavigationBar />

      {/* About Me */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          background: "#f7f7f7",
        }}
      >
        <MotionCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={boxVariants}
          sx={{
            maxWidth: 720,
            width: "100%",
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* Title */}
          <MotionBox variants={itemVariants}>
            <Typography variant="h4" sx={{ mb: 3, fontFamily: "quicksand" }}>
              {"{ About Me }"}
            </Typography>
          </MotionBox>

          {/* Paragraph */}
          <MotionBox variants={itemVariants}>
            <Typography
              sx={{
                fontFamily: "quicksand",
                lineHeight: 1.8,
                fontSize: "1.05rem",
                mb: 3,
              }}
            >
              I design and build responsive, visually engaging websites using
              Figma for high-fidelity prototyping and modern technologies such
              as React , Material UI, Tailwind and Bootstrap.
              <br />
              <br />I also work with Node.js and Express.js to build efficient
              backend infrastructure and have experience using MongoDB as a
              NoSQL database.
              <br />
              <br />
              Feel free to explore my portfolio and get in touch to discuss your
              next project.
            </Typography>
          </MotionBox>

          {/* Tech stack */}
          <MotionBox
            variants={containerVariants}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {[
              "React",
              "Material UI",
              "Tailwind",
              "Bootstrap",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Figma",
            ].map((tech) => (
              <MotionBox key={tech} variants={itemVariants}>
                <Box
                  sx={{
                    px: 1.6,
                    py: 0.6,
                    borderRadius: 2,
                    fontSize: "0.8rem",
                    background: "rgba(0,0,0,0.05)",
                    fontFamily: "quicksand",
                  }}
                >
                  {tech}
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </MotionCard>
      </Box>

      {websites.map((website) => (
        <MotionBox
          key={website.title}
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={containerVariants}
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <MotionBox
            component="img"
            src={website.image}
            alt={website.alt}
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.75 }}
            sx={{
              width: "100%",
              height: { xs: 220, sm: 300, md: "95vh" },
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Dark overlay */}
          <MotionBox
            variants={overlayVariants}
            transition={{ duration: 0.4, delay: 0.75 }}
            sx={{
              position: "absolute",
              inset: 0,
              background: "black",
              pointerEvents: "none",
            }}
          />
          {/* Card */}
          <MotionCard
            variants={cardVariants}
            transition={{
              duration: 0.35,
              delay: 0.75,
              ease: [0.4, 0, 0.2, 1],
            }}
            sx={{
              position: { xs: "static", md: "absolute" },
              bottom: { md: 24 },
              right: { md: 24 },
              mt: { xs: 2, md: 0 },
              width: { xs: "100%", sm: "80%", md: 360 },
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.95)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "quicksand",
                mb: 1,
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              {`${website.title}`}
            </Typography>

            <Typography sx={{ fontFamily: "quicksand", mb: 2 }}>
              {website.description}
            </Typography>

            <Button
              variant="text"
              href={website.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
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
                  backgroundColor: "transparent",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                },

                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              Check out website
              <ArrowForwardIosIcon
                sx={{ fontSize: "1rem", ml: 0.5, mt: 0.5 }}
              />
            </Button>
          </MotionCard>
        </MotionBox>
      ))}
    </Box>
  );
}
