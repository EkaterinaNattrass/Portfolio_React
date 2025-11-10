import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Contact from "./Contact";
import { Box } from "@mui/material";


export default function Layout() {
  return (
    <Box sx={{scrollBehavior: 'smooth', width: "100%"}}>
      <NavigationBar />
      <Profile />
      <About/>
      <Contact />
      <Outlet />
    </Box>
  );
}
