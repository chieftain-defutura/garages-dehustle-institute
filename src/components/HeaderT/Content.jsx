import React from "react";
import External from "../../assets/icons/external-white.svg";
import SamplePDF from "./Sample.pdf";
import "./header.css";

const Content = () => {
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
    <div className="content_btns">
      <a href="#" onClick={onButtonClick}>
        <img src={cloud} alt="access" />
        <h4>Download Brochure</h4>
      </a>
      <button>
        <img src={External} alt="ExternalLink" />
        <h3>Nominate Now</h3>
      </button>
    </div>
  );
};

export default Content;
