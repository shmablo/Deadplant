// Footer.js
import React from "react";
import "./Footer.css"; // Optional: Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/aws.png" alt="" className="bottom-left" />
      <img src="/tier-images/image7.png" alt="" className="bottom-center" />
      <div className="footer-text">
        Current number 1 winrate Hero is Abrams with 60% winrate!
      </div>
      <img src="/initlogo.png" alt="" className="bottom-right" />{" "}
      {/* Add the image path */}
    </footer>
  );
};

export default Footer;
