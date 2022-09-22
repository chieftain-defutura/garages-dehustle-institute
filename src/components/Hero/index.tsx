import React from "react";
import "../Hero/Hero.scss";
import Html from "../../assets/logo/html.svg";
import Css from "../../assets/logo/css.svg";
import Javascript from "../../assets/logo/javascript.svg";
import Reacts from "../../assets/logo/react.svg";
import Button from "../Button";
import WebDevelopment from "../../assets/images/Web-development.png";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="mx pad ">
        <div className="hero">
          <div className="hero-content">
            <div>
              <h1>
                Earn your<span className="text-coloring"> ‍De Charter</span>,
              </h1>
              <h2>
                <span>get benefits of an </span>WEB3.0
              </h2>
              <p>
                Learn about business, network, get high paying jobs — at 10x RoI
                of MBA.
              </p>
            </div>
            <div className="hero-imgs">
              <img src={Html} alt="" />
              <img src={Css} alt="" />
              <img src={Javascript} alt="" />
              <img src={Reacts} alt="" />
            </div>
            <div className="hero-btns">
              <Button variant="primary" children="Download Brochure" />
              <Button variant="secondary" children="Learn More" />
            </div>
          </div>
          <div className="web-img">
            <img src={WebDevelopment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
