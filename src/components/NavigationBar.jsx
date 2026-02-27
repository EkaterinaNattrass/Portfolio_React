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
          <NavLink style={{ textDecoration: "none" }} to="/"><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: "#3a2f25", cursor: 'pointer', fontSize: { xs: '0.5rem', sm: '1rem'} }}>EKATERINA <br /> NATTRASS</Typography></NavLink>
          <NavLink to="frontEnd" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25', cursor: 'pointer', fontSize: { xs: '0.5rem', sm: '1rem'} }}>FRONTEND</Typography></NavLink>
          <NavLink to="design" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25', cursor: 'pointer', fontSize: { xs: '0.5rem', sm: '1rem'} }}>DESIGN</Typography></NavLink>
          <NavLink to="shop" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25', cursor: 'pointer', fontSize: { xs: '0.5rem', sm: '1rem'} }}>SHOP</Typography></NavLink>
          <NavLink to="contact" style={{ textDecoration: "none" }}><Typography sx={{ fontFamily: 'Quicksand', fontWeight: 'bold', color: '#3a2f25', cursor: 'pointer', fontSize: { xs: '0.5rem', sm: '1rem'} }}>CONTACTS</Typography></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
