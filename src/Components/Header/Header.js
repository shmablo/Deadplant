import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="/deadlocklogo.png" alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">My Playbook</li>
          <li className="nav-item">About</li>
          <li className="nav-item">
            <Link to="/tier-list" className="nav-item">
              Tier List
            </Link>
          </li>
          <li className="nav-item dropdown">
            {selectedLanguage}
            <ul className="dropdown-menu">
              <li
                className="dropdown-item"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </li>
              <li
                className="dropdown-item"
                onClick={() => handleLanguageChange("Spanish")}
              >
                Spanish
              </li>
              <li
                className="dropdown-item"
                onClick={() => handleLanguageChange("French")}
              >
                French
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
