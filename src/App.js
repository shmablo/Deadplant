import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

// Pages for the Router
import TierList from "./Pages/TierList/TierList";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Playbook from "./Pages/Playbook/Playbook";
import Logout from "./Pages/Logout/Logout";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/Signup";
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tier-list" element={<TierList />} />
        <Route path="/about" element={<About />} />
        <Route path="/playbook" element={
          <ProtectedRoute>
            <Playbook />
          </ProtectedRoute>
        } />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;