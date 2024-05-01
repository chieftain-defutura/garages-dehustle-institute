import React from "react";
import Samimg from "../../assets/images/samimg.png";
import Unschool from "../../assets/images/unschool-logo.png";
import Wind from "../../assets/icons/wind.svg";
import Zap from "../../assets/icons/zap.svg";
import Anchor from "../../assets/icons/anchor.svg";
import Top from "../../assets/images/top500.png";
import cloud from "../../assets/icons/cloud.svg";
import External from "../../assets/images/external-link.png";
import SamplePDF from "./Sample.pdf";
import "./hero.css";

const Hero = () => {
  // const onButtonClick = () => {
  //   const pdfUrl = SamplePDF;
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "document.pdf"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <>
      <div className="hero_main">
        <img src={Unschool} alt="unschool-logo" />
        <p>Happening on 20th, 21st & 22nd Of May, 2024</p>
        <a href="https://openinapp.com/vibe/public/garages">
          <img src={cloud} alt="access" />
          <h4>Download Brochure</h4>
        </a>
        <div className="hero_bg">
          <div className="potentials">
            <p>
              Reach your
              <br />
              potentials with
            </p>
            <div className="potential_lists">
              <div className="listing">
                <img src={Wind} alt="wind" />
                <p>
                  SENSORY
                  <br />
                  <span>Activation</span>
                </p>
              </div>
              <div className="listing">
                <img src={Zap} alt="zap" />
                <p>
                  THOUGHT
                  <br />
                  <span>Formulations</span>
                </p>
              </div>
              <div className="listing">
                <img src={Anchor} alt="anchor" />
                <p>
                  HABIT
                  <br />
                  <span>Installations</span>
                </p>
              </div>
            </div>
          </div>
          <img src={Samimg} alt="Sam" />
          <p>
            The Great Uschooling Camp is a three day career awareness bootcamp
            for students moving into
            <br />
            undergraduate programmes from higher education in the current year
            who are interested in discovering their
            <br />
            ideal dreams, develop ideas on them and turn them into passion even
            before they enroll for college degrees.
          </p>
          <p id="res_para">
            The Great Uschooling Camp is a three day career awareness bootcamp
            for students
            <br /> moving into undergraduate programmes from higher education in
            the current year who <br />
            are interested in discovering their ideal dreams, develop ideas on
            them and turn them
            <br /> into passion even before they enroll for college degrees.
          </p>
          <div className="top_nominates">
            <p>
              An exclusive
              <br />
              online camp for
            </p>
            <img src={Top} alt="Top 500" />
          </div>
        </div>
      </div>
      <div className="responsive_mob_hero">
        <img src={Unschool} alt="unschool-logo" />
        <p>Happening on 20th, 21st & 22nd Of May, 2024</p>
        <a href="https://openinapp.com/vibe/public/garages">
          <img src={cloud} alt="access" />
          <h4>Download Brochure</h4>
        </a>
        <div className="mob_hero_bg">
          <img src={Samimg} alt="Sam" />
          <p>
            The Great Uschooling Camp is a three day career awareness
            <br />
            bootcamp for students moving into undergraduate programmes
            <br />
            from higher education in the current year who are interested in
            <br />
            discovering their ideal dreams, develop ideas on them and turn
            <br />
            them into passion even before they enroll for college degrees.
          </p>
        </div>
      </div>
      <button id="nom_hide">
        <a href="https://openinapp.com/vibe/public/garages">
          <h3>Nominate Now</h3>
        </a>
        <img src={External} alt="ExternalLink" />
      </button>
      <div className="mob_potentials">
        <p>
          Reach your
          <br />
          potentials with
        </p>
        <div className="potential_list">
          <div className="listing">
            <img src={Wind} alt="wind" />
            <p>
              SENSORY
              <br />
              <span>Activation</span>
            </p>
          </div>
          <div className="listing">
            <img src={Zap} alt="zap" />
            <p>
              THOUGHT
              <br />
              <span>Formulations</span>
            </p>
          </div>
          <div className="listing">
            <img src={Anchor} alt="anchor" />
            <p>
              HABIT
              <br />
              <span>Installations</span>
            </p>
          </div>
        </div>
        <div className="top_nominates">
          <p>
            An exclusive
            <br />
            online camp for
          </p>
          <img src={Top} alt="Top 500" />
        </div>
      </div>
    </>
  );
};
export default Hero;
