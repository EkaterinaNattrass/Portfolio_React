import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import FrontEnd from "./components/FrontEnd";
import Design from "./components/Design";
import Shop from "./components/Shop";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/frontEnd" element={<FrontEnd />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
