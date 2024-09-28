import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
//Pages for the Router
import TierList from "./Pages/TierList/TierList"; // Import the newly created TierList component
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Playbook from "./Pages/Playbook/Playbook";

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tier-list" element={<TierList />} />
        <Route path="/about" element={<About />} />
        <Route path="/playbook" element={<Playbook />} />
      </Routes>
    </Router>
  );
}

export default App;
