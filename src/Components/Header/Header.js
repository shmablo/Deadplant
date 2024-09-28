import React from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/deadlocklogo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item dropdown">
            More
            <ul className="dropdown-menu">
              <li className="dropdown-item">Contact</li>
              <li className="dropdown-item">FAQ</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
