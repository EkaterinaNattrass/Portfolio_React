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
          <NavLink style={{ textDecoration: "none" }} to="/"><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: "#3a2f25" }}>EKATERINA NATTRASS</Typography></NavLink>
          <NavLink to="frontEnd" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25' }}>FRONTEND</Typography></NavLink>
          <NavLink to="design" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25' }}>DESIGN</Typography></NavLink>
          <NavLink to="shop" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25' }}>SHOP</Typography></NavLink>
          <NavLink to="contact" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25' }}>CONTACTS</Typography></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
