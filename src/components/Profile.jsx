import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Profile() {
  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            width: "50%",
            bgcolor: "#f3f3f3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('images/logo.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "27rem",
              height: "27rem",
              margin: "0 auto",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            bgcolor: "#2f2f53",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "#f3f3f3", fontSize: "3rem", fontFamily: 'Quicksand' }}>
            Front End Developer /<br /> UX Designer._
          </Typography>
          <Typography sx={{ color: "#f3f3f3", fontSize: "2rem", mt: "100px", fontFamily: 'Quicksand' }}>
            &#60; Building Beautiful Experiences, <br /> One Line at a Time
            &#47;&#62;
          </Typography>
          <Box sx={{ mt: '50px'}}>
            <Link to="https://github.com/EkaterinaNattrass">
              <GitHub
                sx={{
                  width: "30px",
                  height: "30px",
                  p: "20px",
                  color: "white",
                }}
              />
            </Link>
            <Link to="https://www.linkedin.com/in/ekaterina-nattrass-4b4336298/">
              <LinkedIn
                sx={{
                  width: "30px",
                  height: "30px",
                  p: "20px",
                  color: "white",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
