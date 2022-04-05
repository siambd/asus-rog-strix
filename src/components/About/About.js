import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">
        Want to know more about us ? Dont think about it just email:
      </h2>
      <h3 className="email"> rogcommunity@asus.com</h3>
      <img
        src="/rog-logo.png"
        alt=""
      />
    </div>
  );
};

export default About;
