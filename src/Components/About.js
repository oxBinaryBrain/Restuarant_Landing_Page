import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const handleLearnMoreClick = () => {
    window.location.href = "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/#:~:text=eat%20at%20least%205%20portions,eggs%2C%20meat%20and%20other%20protein"; 
  };
  const videoUrl = "https://www.youtube.com/watch?v=XMcab1MFaLc";

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          It provides the nutrients the body needs for growth, repair, and maintenance, as
          well as energy to function. A well-balanced diet includes a variety of foods from each of the five food groups,
          in the recommended amounts.
        </p>
        <p className="primary-text">
          Eating a healthy, balanced diet is an important part of maintaining good health, and can help you feel your best.
        </p>
        <div className="about-buttons-container">
        <button className="secondary-button" onClick={handleLearnMoreClick}>Learn More</button>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
