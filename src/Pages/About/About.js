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
          <h3>Furzaan Khan</h3>  {/* Name placed above the image */}
          <img src="furzaan.jpg" alt="Furzaan Khan" className="profile-image" />
          <a href="https://www.linkedin.com/in/furzaankhan/">
            <img src="/linkedInlogo.png" alt="LinkedIn Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          <h3>Alexander Zorrilla</h3>  {/* Name placed above the image */}
          <img src="alex.jpg" alt="Alexander Zorrilla" className="profile-image" />
          <a href="https://www.linkedin.com/in/alexander-zorrilla/">
            <img src="/linkedInlogo.png" alt="LinkedIn Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          <h3>Pablo Ramos</h3>  {/* Name placed above the image */}
          <img src="shmablo.jpg" alt="Pablo Ramos" className="profile-image" />
          <a href="https://www.linkedin.com/in/pabloramos06/">
            <img src="/linkedInlogo.png" alt="LinkedIn Logo" className="logo" />
          </a>
        </div>
        <div className="text-box">
          <h3>Samantha Sanchez</h3>  {/* Name placed above the image */}
          <img src="samantha.jpg" alt="Samantha Sanchez" className="profile-image" />
          <a href="https://example.com">
            <img src="/linkedInlogo.png" alt="LinkedIn Logo" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
