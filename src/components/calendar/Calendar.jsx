import React from "react";
import External from "../../assets/images/external-link.png";
import Dot from "../../assets/icons/dot.svg";
import "./Calendar.css";

const Calendar = () => {
  const ApplyTitles = [
    {
      ApplyHeading: "Admission ",
      ApplyHeadingbr: "Window",
      ApplyButton: "Apply Now",
    },
    {
      ApplyHeading: "Preliminary",
      ApplyHeadingbr: "Entrance Exam",
      ApplyButton: "Apply Now",
    },
    {
      ApplyHeading: "Supplemental",
      ApplyHeadingbr: "Assessments",
      ApplyButton: "Apply Now",
    },
    {
      ApplyHeading: "Selections",
      ApplyHeadingbr: "Published",
      ApplyButton: "Apply Now",
    },
    {
      ApplyHeading: "Cohort",
      ApplyHeadingbr: "Orientation",
      ApplyButton: "Apply Now",
    },
  ];

  const CloseDates = [
    {
      date: "23, March 2024",
      para: "Application Window",
      parabr: "Closes",
    },
    { date: "23, March 2024", para: "Application Window", parabr: "Closes" },
    { date: "23, March 2024", para: "Application Window", parabr: "Closes" },
    { date: "23, March 2024", para: "Application Window", parabr: "Closes" },
    { date: "23, March 2024", para: "Application Window", parabr: "Closes" },
  ];

  return (
    <div className="calendar">
      <div className="road_map">
        <button>
          Download Roadmap <img src={External} alt="External link" />
        </button>
      </div>
      <div className="calendar_dates">
        <div className="dates_head">
          <h2>MARK KEY DATES ON YOUR CALENDAR</h2>
          <hr />
        </div>
        <div className="main_dates">
          <div className="apply_title_list">
            {ApplyTitles.map((apply) => {
              return (
                <div className="apply_titles">
                  <h2>
                    {apply.ApplyHeading}
                    <br />
                    {apply.ApplyHeadingbr}
                  </h2>
                  <a href="#">{apply.ApplyButton}</a>
                </div>
              );
            })}
          </div>
          <div className="dot_lines">
            <div className="vsline"></div>
            <img src={Dot} alt="" />
            <div className="vline"></div>
            <img src={Dot} alt="" />
            <div className="vline"></div>
            <img src={Dot} alt="" />
            <div className="vline"></div>
            <img src={Dot} alt="" />
            <div className="vline"></div>
            <img src={Dot} alt="" />
            <div className="vsline"></div>
          </div>
          <div className="apply_dates">
            {CloseDates.map((closing) => {
              return (
                <div className="last_date">
                  <h3>{closing.date}</h3>
                  <h4>
                    {closing.para}
                    <br />
                    {closing.parabr}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
