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
          <li className="nav-item">
            <Link to="/playbook" className="nav-link">
              Playbook
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tier-list" className="nav-link">
              Tier List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="https://deadplant.auth.us-east-2.amazoncognito.com/login?client_id=41dkf3t774e4qr7k45lvmtdvnq&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fhttp%3A%2F%2Flocalhost%3A3000%2F"
              className="nav-link"
            >
              Login
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
