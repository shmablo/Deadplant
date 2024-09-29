import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is authenticated on component mount
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

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

          {isAuthenticated ? (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link" style={{ border: 'none', fontSize: '28px', fontFamily: 'DeadlockFont, sans-serif', background: 'none', padding: '5px', cursor: 'pointer' }}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}

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