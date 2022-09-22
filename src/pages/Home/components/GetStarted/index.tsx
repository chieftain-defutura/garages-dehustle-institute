import React from "react";
import { Button } from "../../../../components";
import "../GetStarted/GetStarted.scss";

const GetStarted: React.FC = () => {
  return (
    <div className="getStarted-container">
      <div className="mx pad">
        <div className="getStarted">
          <div className="get">
            <h1>
              Get started with <span className="text-coloring">De</span>
            </h1>
            <h6>Next Cohort starts on 16th September, 2022</h6>
            <p>
              Attend a huddle with us and know what’s better for you -
              <span>De</span> or a traditional <span>WEB 3.0</span>?
            </p>
            <Button variant="primary" children="Register Now" />
          </div>
          <div className="heading">
            <h2>How the program works</h2>
          </div>
          <div className="program-works">
            <div className="works">
              <div>
                <h3>
                  <span>1</span>
                </h3>
                <h2>Admissions</h2>
                <p>
                  A 30 min personal interview to understand whether Stoa is the
                  right fit for you and if you will add value to the Stoa
                  Community
                </p>
              </div>
            </div>
            <div className="works">
              <div>
                <h3>
                  <span>2</span>
                </h3>
                <h2>Orientation</h2>
                <p>
                  A 3-day offline session designed to get you inducted into the
                  Stoa journey.
                </p>
              </div>
            </div>
            <div className="works">
              <div>
                <h3>
                  <span>3</span>
                </h3>
                <h2>L1 Charter</h2>
                <p>
                  Complete the pre-requisites for the L1 Charter and appear for
                  the assessment.
                </p>
              </div>
            </div>
            <div className="works">
              <div>
                <h3>
                  <span>4</span>
                </h3>
                <h2>L2 Charter</h2>
                <p>
                  Complete the pre-requisites for the L2 Charter and appear for
                  the assessment.
                </p>
              </div>
            </div>
            <div className="works">
              <div>
                <h3>
                  <span>5</span>
                </h3>
                <h2>Career Services</h2>
                <p>
                  Post clearing the L1 or L2 charter, you will unlock the career
                  services module to get access to high growth, high impact
                  jobs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
