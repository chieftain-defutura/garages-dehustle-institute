import React from "react";
import Samimg from "../../assets/images/samimg.png";
import Unschool from "../../assets/images/hero-img.png";
import Wind from "../../assets/images/wind.png";
import Zap from "../../assets/images/zap.png";
import Anchor from "../../assets/images/anchor.png";
import Top from "../../assets/images/topimg.png";
import cloud from "../../assets/icons/cloud.svg";
import External from "../../assets/images/link.png";
import Chat from "../../assets/icons/chat.svg";
import HeroT from "../HeroT/Thero";
import "./hero.css";

const Hero = ({ language }) => {
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
        <p>
          {language === "en"
            ? "Happening on 20th, 21st & 22nd Of May, 2024"
            : "2024, மே 20, 21 மற்றும் 22 தேதிகளில் நடைபெறுகிறது"}
        </p>
        <a href="https://openinapp.com/vibe/public/garages">
          <img src={cloud} alt="access" />
          <h4>
            {" "}
            {language === "en" ? (
              "Download Brochure"
            ) : (
              <>
                'இதர விவரங்களை
                <br />
                அறிய பதிவிறக்கவும்'
              </>
            )}
          </h4>
        </a>
        <div className="hero_bg">
          <div className="potentials">
            <p>
              {language === "en" ? (
                <>
                  Reach your
                  <br />
                  potentials with
                </>
              ) : (
                <>
                  {" "}
                  உங்கள்
                  <br />
                  திறனை அடைய
                </>
              )}
            </p>
            <div className="potential_lists">
              <div className="listing">
                <img src={Wind} alt="wind" />
                <p>
                  {language === "en" ? (
                    <>
                      SENSORY
                      <br />
                      <span>Activation</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      உணர்திறன்
                      <br />
                      <span>செயல்படுத்துதல்</span>
                    </>
                  )}
                </p>
              </div>
              <div className="listing">
                <img src={Zap} alt="zap" />
                <p>
                  {language === "en" ? (
                    <>
                      {" "}
                      THOUGHT
                      <br />
                      <span>Formulations</span>
                    </>
                  ) : (
                    <>
                      சிந்தனை
                      <br />
                      <span>விதிமுறைகள்</span>
                    </>
                  )}
                </p>
              </div>
              <div className="listing">
                <img src={Anchor} alt="anchor" />
                <p>
                  {language === "en" ? (
                    <>
                      HABIT
                      <br />
                      <span>Installations</span>
                    </>
                  ) : (
                    <>
                      பழக்க
                      <br />
                      <span>வரைமுறைகள்</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <img src={Samimg} alt="Sam" />
          <p>
            {language === "en" ? (
              <>
                {" "}
                The Great Uschooling Camp is a three day career awareness
                bootcamp for students moving into
                <br />
                undergraduate programmes from higher education in the current
                year who are interested in discovering their
                <br />
                ideal dreams, develop ideas on them and turn them into passion
                even before they enroll for college degrees.
              </>
            ) : (
              <>
                “The Great Unschooling Camp” என்பது நடப்பு ஆண்டில் உயர்கல்வியில்
                இருந்து இளங்கலைப்
                <br /> படிப்புகளுக்குச் செல்லும் கனவுகள் கொண்ட மற்றும் தங்கள்
                இலட்சியங்களை கண்டறியும்
                <br /> ஆர்வமுள்ள மாணவர்களுக்காக உருவாக்கப்பட்ட மூன்று நாள்
                தொழில் விழிப்புணர்வு துவக்க முகாம் ஆகும்.
              </>
            )}
          </p>
          <p id="res_para">
            {language === "en" ? (
              <>
                The Great Uschooling Camp is a three day career awareness
                bootcamp for students
                <br /> moving into undergraduate programmes from higher
                education in the current year who <br />
                are interested in discovering their ideal dreams, develop ideas
                on them and turn them
                <br /> into passion even before they enroll for college degrees.
              </>
            ) : (
              <>
                {" "}
                “The Great Unschooling Camp” என்பது நடப்பு ஆண்டில் உயர்கல்வியில்
                இருந்து
                <br /> இளங்கலைப் படிப்புகளுக்குச் செல்லும் கனவுகள் கொண்ட மற்றும்
                தங்கள்
                <br /> இலட்சியங்களை கண்டறியும் ஆர்வமுள்ள மாணவர்களுக்காக
                உருவாக்கப்பட்ட
                <br /> மூன்று நாள் தொழில் விழிப்புணர்வு துவக்க முகாம் ஆகும்.
              </>
            )}
          </p>
          <div className="top_nominates">
            <p>
              {language === "en" ? (
                <>
                  An exclusive
                  <br />
                  online camp for
                </>
              ) : (
                <>
                  {" "}
                  ஒரு பிரத்யேக
                  <br />
                  ஆன்லைன் முகாம்
                </>
              )}
            </p>
            <img src={Top} alt="Top 500" />
          </div>
        </div>
      </div>
      <div className="responsive_mob_hero">
        <img src={Unschool} alt="unschool-logo" />
        <p>
          {language === "en"
            ? "Happening on 20th, 21st & 22nd Of May, 2024"
            : "2024, மே 20, 21 மற்றும் 22 தேதிகளில் நடைபெறுகிறது"}
        </p>
        <a href="https://openinapp.com/vibe/public/garages">
          <img src={cloud} alt="access" />
          <h4>
            {language === "en" ? (
              "Download Brochure"
            ) : (
              <>
                'இதர விவரங்களை
                <br />
                அறிய பதிவிறக்கவும்'
              </>
            )}
          </h4>
        </a>
        <div className="mob_hero_bg">
          <img src={Samimg} alt="Sam" />
          <p>
            {language === "en" ? (
              <>
                The Great Uschooling Camp is a three day career awareness
                <br />
                bootcamp for students moving into undergraduate programmes
                <br />
                from higher education in the current year who are interested in
                <br />
                discovering their ideal dreams, develop ideas on them and turn
                <br />
                them into passion even before they enroll for college degrees.
              </>
            ) : (
              <>
                {" "}
                “The Great Unschooling Camp” என்பது நடப்பு ஆண்டில்
                <br />
                உயர்கல்வியில் இருந்து இளங்கலைப் படிப்புகளுக்குச்
                <br />
                செல்லும் கனவுகள் கொண்ட மற்றும் தங்கள்
                <br />
                இலட்சியங்களை கண்டறியும் ஆர்வமுள்ள
                <br />
                மாணவர்களுக்காக உருவாக்கப்பட்ட மூன்று நாள் தொழில்
                <br /> விழிப்புணர்வு துவக்க முகாம் ஆகும்.
              </>
            )}
          </p>
        </div>
      </div>
      <button id="nom_hide">
        <a href="https://openinapp.com/vibe/public/garages">
          <h3>
            {language === "en" ? "Nominate Now" : "இப்போதே பரிந்துரைக்கவும்"}
          </h3>
        </a>
        <img src={External} alt="ExternalLink" width={16} height={16} />
      </button>
      <div className="mob_potentials">
        <p>
          {language === "en" ? (
            <>
              Reach your
              <br />
              potentials with
            </>
          ) : (
            <>
              {" "}
              உங்கள்
              <br />
              திறனை அடைய
            </>
          )}
        </p>
        <div className="potential_list">
          <div className="listing">
            <img src={Wind} alt="wind" width={26.4} height={26.4} />
            <p>
              {language === "en" ? (
                <>
                  SENSORY
                  <br />
                  <span>Activation</span>
                </>
              ) : (
                <>
                  {" "}
                  உணர்திறன்
                  <br />
                  <span>செயல்படுத்துதல்</span>
                </>
              )}
            </p>
          </div>
          <div className="listing">
            <img src={Zap} alt="zap" width={26.4} height={26.4} />
            <p>
              {language === "en" ? (
                <>
                  {" "}
                  THOUGHT
                  <br />
                  <span>Formulations</span>
                </>
              ) : (
                <>
                  சிந்தனை
                  <br />
                  <span>விதிமுறைகள்</span>
                </>
              )}
            </p>
          </div>
          <div className="listing">
            <img src={Anchor} alt="anchor" width={26.4} height={26.4} />
            <p>
              {language === "en" ? (
                <>
                  HABIT
                  <br />
                  <span>Installations</span>
                </>
              ) : (
                <>
                  பழக்க
                  <br />
                  <span>வரைமுறைகள்</span>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="top_nominates">
          <p>
            {language === "en" ? (
              <>
                An exclusive
                <br />
                online camp for
              </>
            ) : (
              <>
                {" "}
                ஒரு பிரத்யேக
                <br />
                ஆன்லைன் முகாம்
              </>
            )}
          </p>
          <img src={Top} alt="Top 500" />
        </div>
      </div>
      <div className="whatsapp">
        <a href="">
          <img src={Chat} alt="whatsapp" />
        </a>
      </div>
    </>
  );
};
export default Hero;
