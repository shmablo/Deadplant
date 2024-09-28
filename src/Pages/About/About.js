import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        This app was created by these 4 developers.
        <br /> The purpose of this website is to strategize and view the
        different possibilities within the game Deadlock.
      </p>
      <div className="text-boxes">
        <div className="text-box">
          Furzaan Khan
          <a href="https://www.linkedin.com/in/furzaankhan/">
            <img src="/linkedInlogo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          Alexander Zorrilla
          <a href="https://www.linkedin.com/in/alexander-zorrilla/">
            <img src="/linkedInlogo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          Pablo Ramos
          <a href="https://www.linkedin.com/in/pabloramos06/">
            <img src="/linkedInlogo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          Samantha Sanchez
          <a href="https://example.com">
            <img src="/linkedInlogo.png" alt="Logo" className="logo" />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="furzaan.jpg" alt="Furzaan Khan" className="profile-image" />
        <img src="alex.jpg" alt="Alexander Zorrilla" className="profile-image" />
        <img src="shmablo.jpg" alt="Pablo Ramos" className="profile-image" />
        <img src="samantha.jpg" alt="Samantha Sanchez" className="profile-image" />
      </div>
    </div>
  );
};

export default About;