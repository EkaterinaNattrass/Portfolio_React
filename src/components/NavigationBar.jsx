import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Typography} from "@mui/material";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink style={{ textDecoration: "none" }} to="/"><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#4e597b' }}>EKATERINA &#60; &#47; &#62;  NATTRASS</Typography></NavLink>
          <NavLink to="about" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#4e597b' }}>&#47;&#47; ABOUT</Typography></NavLink>
          <NavLink to="projects" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#4e597b' }}>&#47;&#47; PROJECTS</Typography></NavLink>
          <NavLink to="contact" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#4e597b' }}>&#47;&#47; CONTACT</Typography></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
