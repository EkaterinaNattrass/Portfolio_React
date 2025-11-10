import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Typography} from "@mui/material";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between",
         }}>
          <NavLink style={{ textDecoration: "none" }} to="/"><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#545454' }}>EKATERINA NATTRASS</Typography></NavLink>
          <NavLink to="about" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#545454' }}>ABOUT</Typography></NavLink>
          <NavLink to="Molly" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#545454' }}>MOLLY</Typography></NavLink>
          <NavLink to="contact" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#545454' }}>CONTACTS</Typography></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
