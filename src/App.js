import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import FrontEnd from "./components/FrontEnd";
import Design from "./components/Design";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";
import Collection from "./components/Collection";
import ProjectDetail from "./components/ProjectDetail";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/frontEnd" element={<FrontEnd />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/collection/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
