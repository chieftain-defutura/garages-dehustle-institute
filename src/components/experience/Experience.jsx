import React from "react";
import Calendar from "../../assets/icons/calendar.svg";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_main">
      <h2>
        Experience the most productive
        <br />
        days of your lifetime here
      </h2>
      <div className="semesters_grid">
        <div className="semesters">
          <p id="borders">
            FIRST
            <br />
            SEMESTER
          </p>
          <p>
            SECOND
            <br />
            SEMESTER
          </p>
          <p>
            THIRD
            <br />
            SEMESTER
          </p>
          <p>
            FOURTH
            <br />
            SEMESTER
          </p>
        </div>
        <div className="counts">
          <h1>
            12
            <br />
            <span>Workshops</span>
          </h1>
          <h1>
            22
            <br />
            <span>Camps</span>
          </h1>
          <h1>
            50
            <br />
            <span>Summits</span>
          </h1>
          <h1>
            11
            <br />
            <span>Conferences</span>
          </h1>
          <h1>
            50
            <br />
            <span>Lectures</span>
          </h1>
          <h1>
            12
            <br />
            <span>Sessions</span>
          </h1>
          <h1>
            08
            <br />
            <span>Exhibitions</span>
          </h1>
          <h1>
            5<br />
            <span>Conferences</span>
          </h1>
        </div>
      </div>
      <button>
        <img src={Calendar} alt="" /> Download Calendar
      </button>
    </div>
  );
};

export default Experience;
