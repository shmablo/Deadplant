import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

// Pages for the Router
import TierList from "./Pages/TierList/TierList";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Playbook from "./Pages/Playbook/Playbook";
import Logout from "./Pages/Logout/Logout";
// Footer


function App() {
  return (
    <Router>
      <Header />
      <main className="main-content"> {/* Add the main-content class here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tier-list" element={<TierList />} />
          <Route path="/about" element={<About />} />
          <Route path="/playbook" element={<Playbook />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
 
    </Router>
  );
}

export default App;