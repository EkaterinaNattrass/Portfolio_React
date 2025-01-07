import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function Projects() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#f3f3f3" }}>
      <Card sx={{ width: "90%", height: "50rem", backgroundColor: '#f8f8f8' }}>
        <CardMedia
          sx={{ width: '50%', height: '50rem' }}
          image="images/Holidaze1.png"
          title="Holidaze project home page"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">HOLIDAZE</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            A holidays accomodation website allowing a customer to book listed
            venues and a venue owner to manage properties. The website features
            minimalistic design and colour palette that encourages adventurous
            mindset and desire to travel. The app is built with MUI.
          </Typography>
        </CardContent>
        <CardActions>
          <Link>
          <Button>Check out the website <ArrowForwardRoundedIcon /></Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
