import React from "react";
import Logo from "../../assets/images/garages-logo.png";
import External from "../../assets/images/external-link.png";
import Ham from "../../assets/icons/hamburger.svg";
import Globe from "../../assets/icons/globe.svg";
import cloud from "../../assets/icons/cloud.svg";
import Arrow from "../../assets/icons/chevron.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_main">
        <img src={Logo} alt="GaragesLogo" />

        <div className="header_btns">
          <a href="#">
            <img src={cloud} alt="access" />
            <h4>Download Brochure</h4>
          </a>
          <button>
            <h3>Nominate Now</h3> <img src={External} alt="ExternalLink" />
          </button>
        </div>
      </div>
      <div className="responsive_main">
        <div className="responsive_head">
          <img src={Logo} alt="GaragesLogo" />
          <button>
            <h3>Nominate Now</h3> <img src={External} alt="ExternalLink" />
          </button>
        </div>
      </div>
      <div className="responsive_mobile">
        <img src={Ham} alt="hamburger" id="ham" />
        <img src={Logo} alt="GaragesLogo" id="logo" />
        <div class="language">
          <a onclick="showLanguages()" class="lang-drpdwn-btn">
            <img src={Globe} alt="language" />
            English
            <img src={Arrow} alt="down arrow" />
          </a>
          <div class="dropdown-language">
            <a href="#">English</a>
            <a href="#">Tamil</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
