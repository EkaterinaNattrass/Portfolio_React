import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Box } from "@mui/material";


export default function Layout() {
  return (
    <Box sx={{scrollBehavior: 'smooth'}}>
      <NavigationBar />
      <Profile />
      <About/>
      <Projects />
      <Contact />
      <Outlet />
      <Footer />
    </Box>
  );
}
