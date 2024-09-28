import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import TierList from "./Pages/TierList/TierList"; // Import the newly created TierList component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tier-list" element={<TierList />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
