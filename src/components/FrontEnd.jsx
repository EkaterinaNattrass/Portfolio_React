import * as React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import NavigationBar from "./NavigationBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

export default function FrontEnd() {
  const MotionBox = motion(Box);
  const MotionCard = motion(Card);
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
        paddingTop: "5rem",
      }}
    >
      <NavigationBar />
      <Card>
        <Typography>
          My expertise lies in designing and crafting responsive and visually
          appealing websites using <span>Figma</span> for high fidelity
          prototypes and the latest web technologies such as{" "}
          <span>Bootstrap</span>, <span>Tailwind</span>,{" "}
          <span>Material UI</span> and <span>React</span>. <br />
          In my projects I also use <span>Node.js</span> and{" "}
          <span>Express.js</span> to build an efficient backend infrastructure.{" "}
          <br />I have experience working with <span>MongoDB</span>, a NoSQL
          database. Feel free to explore my portfolio and get in touch to
          discuss your next project!
        </Typography>
      </Card>

      <MotionBox
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
          src="/images/holidaze.png"
          alt="front page of holidaze website"
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
          <Typography sx={{ fontFamily: "quicksand", mb: 1 }}>
            {"{ HOLIDAZE }"}
          </Typography>

          <Typography sx={{ fontFamily: "quicksand", mb: 2 }}>
            A holiday accommodation website allowing a customer to book listed
            venues and a venue owner to manage properties.
          </Typography>

          <Button
            variant="text"
            href="https://holidaze-ekanat.netlify.app/"
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
            <ArrowForwardIosIcon sx={{ fontSize: "1rem", ml: 0.5, mt: 0.5 }} />
          </Button>
        </MotionCard>
      </MotionBox>

      <MotionBox
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
          src="/images/rainy_days.png"
          alt="front page of rainy days website"
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
          <Typography sx={{ fontFamily: "quicksand", mb: 1 }}>
            {"{ RAINY DAYS }"}
          </Typography>

          <Typography sx={{ fontFamily: "quicksand", mb: 2 }}>
            An e-commerce website selling outdoors jackets of various kinds. The
            target group includes middle-aged people ready for new challenges
            and fascinating adventures. The choice of breath-taking outdoors
            images, natural colours and clean geometric fonts - all that
            designed to attract a customer.
          </Typography>

          <Button
            variant="text"
            href="https://peppy-froyo-40c9b0.netlify.app/"
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
            <ArrowForwardIosIcon sx={{ fontSize: "1rem", ml: 0.5, mt: 0.5 }} />
          </Button>
        </MotionCard>
      </MotionBox>

      <MotionBox
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
          src="/images/museum.png"
          alt="front page of community science museum website"
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
          <Typography sx={{ fontFamily: "quicksand", mb: 1 }}>
            {"{ COMMUNITY SCIENCE MUSEUM }"}
          </Typography>

          <Typography sx={{ fontFamily: "quicksand", mb: 2 }}>
            A website for a local science museum which has various exhibition
            spaces which it strives to make as much fun as possible. The website
            is directed at both children interested in science and families
            looking for a place to spend their time together while learning
            something new.
          </Typography>

          <Button
            variant="text"
            href="https://glittery-kitten-be132b.netlify.app"
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
            <ArrowForwardIosIcon sx={{ fontSize: "1rem", ml: 0.5, mt: 0.5 }} />
          </Button>
        </MotionCard>
      </MotionBox>
    </Box>
  );
}
