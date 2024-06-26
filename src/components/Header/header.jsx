import React, { useState } from "react";
import Logo from "../../assets/images/garages-logo.png";
import External from "../../assets/images/link.png";
import Ham from "../../assets/icons/hamburger.svg";
import Globe from "../../assets/icons/globe.svg";
import cloud from "../../assets/icons/cloud.svg";
import CloudColor from "../../assets/icons/cloud-color.svg";
import Arrow from "../../assets/icons/chevron.svg";
import Close from "../../assets/icons/icon-bar-cancel.png";
import ExternalW from "../../assets/icons/external-white.svg";
import Check from "../../assets/icons/check.svg";
import "./header.css";
import Select from "../selectlang/Select";
import Hero from "../Hero/hero";

const Header = ({ toggleLanguage, language }) => {
  const [langOpen, setLangOpen] = useState(false);

  // const onButtonClick = () => {
  //   const pdfUrl = SamplePDF;
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "document.pdf"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const [sidebarIsOn, setSidebarState] = useState(false);
  const [langBar, setLangBar] = useState(false);
  const [check, setCheck] = useState(false);

  const hamburger = (
    <>
      {!sidebarIsOn ? (
        <img
          src={Ham}
          className="hamburger"
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(true);
          }}
        />
      ) : (
        <img
          src={Close}
          className="hamburger"
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(false);
          }}
        />
      )}
    </>
  );

  const dropdown = (
    <>
      {!langBar ? (
        <div
          className="dropdown"
          onClick={(e) => {
            e.preventDefault();
            setLangBar(true);
          }}
        >
          <div class="language">
            <a href="#" className="lang-drpdwn-btn">
              <img src={Globe} alt="language" />
              English
              <img src={Arrow} alt="down arrow" />
            </a>
          </div>
        </div>
      ) : (
        <>
          <div
            className="dropdown"
            onClick={(e) => {
              e.preventDefault();
              setLangBar(false);
            }}
          >
            <div class="language">
              <a href="#" className="lang-drpdwn-btn">
                <img src={Globe} alt="language" />
                English
                <img src={Arrow} alt="down arrow" />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );

  const sidebar = (
    <div className="sidebar">
      <img
        src={Close}
        className="hamburger"
        onClick={(e) => {
          e.preventDefault();
          setSidebarState(false);
        }}
      />
      <div className="content_btns">
        <a href="https://openinapp.com/vibe/public/garages">
          <img src={CloudColor} alt="access" />
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
        <button>
          <img src={ExternalW} alt="ExternalLink" width={16} height={16} />
          <a href="https://openinapp.com/vibe/public/garages">
            <h3>
              {" "}
              {language === "en" ? "Nominate Now" : "இப்போதே பரிந்துரைக்கவும்"}
            </h3>
          </a>
        </button>
      </div>
    </div>
  );

  const langbar = (
    <div className="langbar">
      <div className="dropdown-language">
        <a href="#" onClick={() => toggleLanguage("en")}>
          English
        </a>
        <hr />
        {!check ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCheck(true);
              toggleLanguage("ta");
            }}
          >
            Tamil
          </a>
        ) : (
          <a
            href="#"
            id="select_tick"
            onClick={(e) => {
              e.preventDefault();
              setCheck(false);
            }}
          >
            Tamil <img src={Check} alt="tick" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="header_main">
        <img src={Logo} alt="GaragesLogo" />

        <div className="header_btns">
          <div className="language">
            <a
              href="#"
              className="lang-drpdwn-btn"
              onClick={() => setLangOpen(true)}
            >
              <img src={Globe} alt="language" />
              English
              <img src={Arrow} alt="down arrow" />
            </a>
          </div>
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
          <button>
            <a href="https://openinapp.com/vibe/public/garages">
              <h3>
                {language === "en"
                  ? "Nominate Now"
                  : "இப்போதே பரிந்துரைக்கவும்"}
              </h3>
            </a>{" "}
            <img src={External} alt="ExternalLink" width={16} height={16} />
          </button>
        </div>
        <Select
          trigger={langOpen}
          setTrigger={setLangOpen}
          toggleLanguage={toggleLanguage}
        />
      </div>
      <div className="responsive_main">
        <div className="responsive_head">
          <img src={Logo} alt="GaragesLogo" />
          <div class="language">
            <a
              href="#"
              className="lang-drpdwn-btn"
              onClick={() => setLangOpen(true)}
            >
              <img src={Globe} alt="language" />
              English
              <img src={Arrow} alt="down arrow" />
            </a>
            <button>
              <a href="https://openinapp.com/vibe/public/garages">
                <h3>Nominate Now</h3>
              </a>
              <img src={External} alt="ExternalLink" width={16} height={16} />
            </button>
          </div>
        </div>
        <Select
          toggleLanguage={toggleLanguage}
          trigger={langOpen}
          setTrigger={setLangOpen}
        />
      </div>
      <div className="responsive_mobile">
        {hamburger}
        {sidebarIsOn && sidebar}
        <img src={Logo} alt="GaragesLogo" id="logo" />
        {dropdown}
        {langBar && langbar}
      </div>
      <Hero language={language} />
    </>
  );
};

export default Header;
