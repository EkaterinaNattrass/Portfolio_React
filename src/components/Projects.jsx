import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, CardActionArea } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

const itemData = [
  {
    img: "images/Holidaze1.png",
    title: "Home page",
  },
  {
    img: "images/Museum1.png",
    title: "Books",
  },
  {
    img: "images/Auction1.png",
    title: "Sink",
  },
  {
    img: "images/Raindays1.png",
    title: "Kitchen",
  },
];

export default function Projects() {
  return (
     <Box sx={{ height: "100vh", backgroundColor: "#f3f3f3" }}>
      <ImageList sx={{ width: '100%' }} cols={2} rowHeight={'50%'}>
      {itemData.map((item) => (
        <CardActionArea>
                 <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        </CardActionArea>
   
      ))}
    </ImageList>     
    </Box> 

    )
}
