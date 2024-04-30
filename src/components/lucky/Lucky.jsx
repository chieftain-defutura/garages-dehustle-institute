import React from "react";
import Users from "../../assets/icons/users.svg";
import Thumbs from "../../assets/icons/thumbs-down.svg";
import "./Lucky.css";

const Lucky = () => {
  return (
    <div className="admission">
      <div className="admission_main">
        <div className="admission_status">
          <div className="ellipse">
            <div className="icon_count">
              {" "}
              <img src={Users} alt="user" />
              <h1>09</h1>
            </div>
            <p>Application every year for each cohot</p>
          </div>
          <div className="ellipse">
            <div className="icon_count">
              <img src={Thumbs} alt="thumbs-down" />
              <h1>96%</h1>
            </div>
            <p>Rejection rate is the last year</p>
          </div>
        </div>
        <div className="dashed"></div>
        <div className="admission_time">
          <h2>
            You are <span>lucky</span> <span id="lite">early bird.</span>
          </h2>
          <p>
            You have <span>90% chance</span> of getting selected. Use the
            opportunity
          </p>
          <h5>ADMISSION CLOSES IN</h5>
          <div className="admission_ends">
            <h1>
              11
              <br />
              <span> Months</span>
            </h1>
            <h1>
              23
              <br />
              <span>Days</span>
            </h1>
            <div className="end_time">
              <div className="time">
                <div className="timer">
                  <h3>03</h3>
                  <p> Hours</p>
                </div>

                <div className="timer">
                  <h3>23</h3>
                  <p> Minutes</p>
                </div>
              </div>
              <p>Closes on 27 June, 2024</p>
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Lucky;
