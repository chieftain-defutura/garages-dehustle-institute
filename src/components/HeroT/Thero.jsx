import React from "react";
import Samimg from "../../assets/images/samimg.png";
import Unschool from "../../assets/images/unschool-logo.png";
import Wind from "../../assets/icons/wind.svg";
import Zap from "../../assets/icons/zap.svg";
import Anchor from "../../assets/icons/anchor.svg";
import Top from "../../assets/images/top.png";
import cloud from "../../assets/icons/cloud.svg";
import External from "../../assets/images/external-link.png";
import SamplePDF from "./Sample.pdf";
import "./Thero.css";

const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = SamplePDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero_main">
        <img src={Unschool} alt="unschool-logo" />
        <p>2024, மே 20, 21 மற்றும் 22 தேதிகளில் நடைபெறுகிறது</p>
        <a href="#" onClick={onButtonClick}>
          <img src={cloud} alt="access" />
          <h4>
            இதர விவரங்களை
            <br />
            அறிய பதிவிறக்கவும்
          </h4>
        </a>
        <div className="hero_bg">
          <div className="potentials">
            <p>
              உங்கள்
              <br />
              திறனை அடைய
            </p>
            <div className="potential_lists">
              <div className="listing">
                <img src={Wind} alt="wind" />
                <p>
                  உணர்திறன்
                  <br />
                  <span>செயல்படுத்துதல்</span>
                </p>
              </div>
              <div className="listing">
                <img src={Zap} alt="zap" />
                <p>
                  சிந்தனை
                  <br />
                  <span>விதிமுறைகள்</span>
                </p>
              </div>
              <div className="listing">
                <img src={Anchor} alt="anchor" />
                <p>
                  பழக்க
                  <br />
                  <span>வரைமுறைகள்</span>
                </p>
              </div>
            </div>
          </div>
          <img src={Samimg} alt="Sam" />
          <p>
            “The Great Unschooling Camp” என்பது நடப்பு ஆண்டில் உயர்கல்வியில்
            இருந்து இளங்கலைப்
            <br /> படிப்புகளுக்குச் செல்லும் கனவுகள் கொண்ட மற்றும் தங்கள்
            இலட்சியங்களை கண்டறியும்
            <br /> ஆர்வமுள்ள மாணவர்களுக்காக உருவாக்கப்பட்ட மூன்று நாள் தொழில்
            விழிப்புணர்வு துவக்க முகாம் ஆகும்.
          </p>
          <p id="res_para">
            “The Great Unschooling Camp” என்பது நடப்பு ஆண்டில் உயர்கல்வியில்
            இருந்து
            <br /> இளங்கலைப் படிப்புகளுக்குச் செல்லும் கனவுகள் கொண்ட மற்றும்
            தங்கள்
            <br /> இலட்சியங்களை கண்டறியும் ஆர்வமுள்ள மாணவர்களுக்காக
            உருவாக்கப்பட்ட
            <br /> மூன்று நாள் தொழில் விழிப்புணர்வு துவக்க முகாம் ஆகும்.
          </p>
          <div className="top_nominates">
            <p>
              ஒரு பிரத்யேக
              <br />
              ஆன்லைன் முகாம்
            </p>
            <img src={Top} alt="Top 500" />
          </div>
        </div>
      </div>
      <div className="responsive_mob_hero">
        <img src={Unschool} alt="unschool-logo" />
        <p>2024, மே 20, 21 மற்றும் 22 தேதிகளில் நடைபெறுகிறது</p>
        <a href="#" onClick={onButtonClick}>
          <img src={cloud} alt="access" />
          <h4>
            {" "}
            இதர விவரங்களை
            <br />
            அறிய பதிவிறக்கவும்
          </h4>
        </a>
        <div className="mob_hero_bg">
          <img src={Samimg} alt="Sam" />
          <p>
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
          </p>
        </div>
      </div>
      <button id="nom_hide">
        <h3>Nominate Now</h3> <img src={External} alt="ExternalLink" />
      </button>
      <div className="mob_potentials">
        <p>
          உங்கள்
          <br />
          திறனை அடைய
        </p>
        <div className="potential_list">
          <div className="listing">
            <img src={Wind} alt="wind" />
            <p>
              உணர்திறன்
              <br />
              <span>செயல்படுத்துதல்</span>
            </p>
          </div>
          <div className="listing">
            <img src={Zap} alt="zap" />
            <p>
              சிந்தனை
              <br />
              <span>விதிமுறைகள்</span>
            </p>
          </div>
          <div className="listing">
            <img src={Anchor} alt="anchor" />
            <p>
              பழக்க
              <br />
              <span>வரைமுறைகள்</span>
            </p>
          </div>
        </div>
        <div className="top_nominates">
          <p>
            ஒரு பிரத்யேக
            <br />
            ஆன்லைன் முகாம்
          </p>
          <img src={Top} alt="Top 500" />
        </div>
      </div>
    </>
  );
};
export default Hero;
