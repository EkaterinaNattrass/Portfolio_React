import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavigationBar from "./NavigationBar";

export default function FrontEnd() {
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
      <Typography>
        My expertise lies in designing and crafting responsive and visually
        appealing websites using <span>Figma</span> for high fidelity prototypes
        and the latest web technologies such as <span>Bootstrap</span>,{" "}
        <span>Tailwind</span>, <span>Material UI</span> and <span>React</span>.{" "}
        <br />
        In my projects I also use <span>Node.js</span> and{" "}
        <span>Express.js</span> to build an efficient backend infrastructure.{" "}
        <br />I have experience working with <span>MongoDB</span>, a NoSQL
        database. Feel free to explore my portfolio and get in touch to discuss
        your next project!
      </Typography>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>HOLIDAZE</Typography>
        <Box
          component="img"
          src="/images/holidaze.png"
          alt="front page of holidaze website"
          sx={{
            height: "300px",
            objectFit: "cover",

            width: "100%",
          }}
        />
        <Typography>
          A holidays accomodation website allowing a customer to book listed
          venues and a venue owner to manage properties. The website features
          minimalistic design and colour palette that encourages adventurous
          mindset and desire to travel. The app is built with MUI.
        </Typography>
        <Button
          variant="text"
          href="https://holidaze-ekanat.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out website
        </Button>
        <Button
          variant="text"
          href="https://github.com/EkaterinaNattrass/Holidaze"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore github
        </Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>Rainy Days</Typography>
        <Box
          component="img"
          src="/images/rainy_days.png"
          alt="front page of rainy days website"
          sx={{
            height: "300px",
            objectFit: "cover",

            width: "100%",
          }}
        />
        <Typography>
          An e-commerce website selling outdoors jackets of various kinds. The
          target group includes middle-aged people ready for new challenges and
          fascinating adventures. The choice of breath-taking outdoors images,
          natural colours and clean geometric fonts - all that designed to
          attract a customer.
        </Typography>

        <Button
          variant="text"
          href="https://peppy-froyo-40c9b0.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out website
        </Button>
        <Button
          variant="text"
          href="https://github.com/EkaterinaNattrass/rainydays-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore github
        </Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>Community Science Museum</Typography>
        <Box
          component="img"
          src="/images/museum.png"
          alt="front page of community science museum website"
          sx={{
            height: "300px",
            objectFit: "cover",

            width: "100%",
          }}
        />
        <Typography>
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
        >
          Check out website
        </Button>
        <Button
          variant="text"
          href="https://github.com/EkaterinaNattrass/community-science-museum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore github
        </Button>
      </Box>
    </Box>
  );
}
