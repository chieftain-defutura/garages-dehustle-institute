import React from "react";
import Logo from "../../assets/images/garages-logo.png";
import External from "../../assets/images/external-link.png";
import Ham from "../../assets/icons/hamburger.svg";
import Globe from "../../assets/icons/globe.svg";
import cloud from "../../assets/icons/cloud.svg";
import CloudColor from "../../assets/icons/cloud-color.svg";
import Arrow from "../../assets/icons/chevron.svg";
import SamplePDF from "./Sample.pdf";
import Close from "../../assets/icons/icon-bar-cancel.png";
import ExternalW from "../../assets/icons/external-white.svg";
import "./header.css";

const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = SamplePDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [sidebarIsOn, setSidebarState] = React.useState(false);
  const [langBar, setLangBar] = React.useState(false);

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
        <a href="#" onClick={onButtonClick}>
          <img src={CloudColor} alt="access" />
          <h4>Download Brochure</h4>
        </a>
        <button>
          <img src={ExternalW} alt="ExternalLink" />
          <h3>Nominate Now</h3>
        </button>
      </div>
    </div>
  );

  const langbar = (
    <div className="langbar">
      <div class="dropdown-language">
        <a href="#">English</a>
        <a href="#">Tamil</a>
      </div>
    </div>
  );

  return (
    <>
      <div className="header_main">
        <img src={Logo} alt="GaragesLogo" />

        <div className="header_btns">
          <a href="#" onClick={onButtonClick}>
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
        {hamburger}
        {sidebarIsOn && sidebar}
        <img src={Logo} alt="GaragesLogo" id="logo" />
        <div class="language">
          <a href="#" className="lang-drpdwn-btn">
            <img src={Globe} alt="language" />
            English
            <img src={Arrow} alt="down arrow" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
