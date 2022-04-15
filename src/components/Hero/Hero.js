import React from "react";
import backgroundImage from "../../images/bannerbackground.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-bg w-100" src={backgroundImage} alt="" />
      <div className="hero-content text-center">
        <h1 className="hero-title text-center">Best Food waiting for You</h1>
        <div>
          <input
            className="search-input w-75 mt-3"
            placeholder="Search food item"
            type="text"
          />
          <button className="Search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
