import React from "react";
import Videoimg from "../../assets/images/videoimg.png";
import "./businessunschool.css";

const Businessunschool = () => {
  return (
    <div className="unschool_main">
      <div className="unschool_box">
        <h2>
          Join the first-ever revolutionary
          <br />
          business unschool
        </h2>
        <p>
          Build your own technology enabled business in twelve months
          <br />
          with dedicated guidance from a Youth Industrialist.
        </p>
        <img src={Videoimg} alt="videoimg" />
      </div>
    </div>
  );
};

export default Businessunschool;
