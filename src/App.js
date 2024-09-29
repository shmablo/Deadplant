import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Amplify } from 'aws-amplify'; // Ensure correct named import of Amplify
import awsConfig from './aws-exports'; // Import your AWS configuration

import Header from "./Components/Header/Header";
import TierList from "./Pages/TierList/TierList";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Playbook from "./Pages/Playbook/Playbook";
import Logout from "./Pages/Logout/Logout";
import Login from "./Pages/Login/Login"; // Ensure correct import of Login component
import ProtectedRoute from './Components/ProtectedRoute'; // Ensure correct import of ProtectedRoute component

// Configure Amplify
Amplify.configure(awsConfig);

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
      </Routes>
    </Router>
  );
}

export default App;