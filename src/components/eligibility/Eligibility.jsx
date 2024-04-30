import React from "react";
import Digital from "../../assets/images/digital-nomad.png";
import Startup from "../../assets/images/startup.png";
import Code from "../../assets/images/coding.png";
import External from "../../assets/images/external-link.png";

import "./Eligibility.css";

const Eligibility = () => {
  return (
    <>
      <div className="eligibility_main">
        <fieldset>
          <legend>ELIGIBILITY CRITERIAS</legend>
          <div className="vertical"></div>
        </fieldset>
        <div className="eligibility_img">
          <fieldset>
            <legend>
              <img src={Digital} alt="digital" />
              <div className="h_line"></div>
              <img src={Startup} alt="startup" />
              <div className="h_line"></div>
              <img src={Code} alt="coding" />
            </legend>
            <div className="eligibility_lists">
              <div className="eligible">
                <h3>
                  Academic
                  <br />
                  Qualification
                </h3>
                <p>
                  We are on a mission to build INDIA's first unschool
                  <br />
                  for business leaderships, thus unlimiting the minds
                  <br />
                  of tomorrow to go beyond traditional degrees,
                  <br />
                  classrooms
                </p>
              </div>
              <div className="eligible">
                <h3>
                  Industrial
                  <br />
                  Experience
                </h3>
                <p>
                  We are on a mission to build INDIA's first unschool
                  <br />
                  for business leaderships, thus unlimiting the minds
                  <br />
                  of tomorrow to go beyond traditional degrees,
                  <br />
                  classrooms
                </p>
              </div>
              <div className="eligible">
                <h3>
                  Time
                  <br />
                  Commitment
                </h3>
                <p>
                  We are on a mission to build INDIA's first unschool
                  <br />
                  for business leaderships, thus unlimiting the minds
                  <br />
                  of tomorrow to go beyond traditional degrees,
                  <br />
                  classrooms
                </p>
              </div>
            </div>
            <div className="bonus">
              <h2>BONUS IF YOU HAVE A STRONG MARKET ANALYSIS THESIS</h2>
              <h3>
                Clearcut idea &<br />
                Clarity in the Market Gap
              </h3>
              <button>
                View Sample Thesis <img src={External} alt="external link" />
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
