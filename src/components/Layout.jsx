import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Profile from "./Profile";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Profile />
      <Expertise />
      <Projects />
      <Contact />
      <Outlet />
      <Footer />
    </>
  );
}
