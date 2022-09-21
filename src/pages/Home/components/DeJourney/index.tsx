import React from "react";
import "../DeJourney/DeJourney.scss";
import EarnLevel from "../../../../assets/images/earn-level.png";
import Learning from "../../../../assets/images/learning.png";
import Orientation from "../../../../assets/images/Orientation.png";
import Admission from "../../../../assets/images/admission-interview.png";

const DeJourney = () => {
  return (
    <div className="deJourney-container">
      <div className="mx pad">
        <div className="deJourney">
          <h1>
            Your <span className="text-coloring">De Journey</span>
          </h1>
          <div>
            <div>
              <img src={EarnLevel} alt="" />
            </div>
            <div>
              <h3>Admissions Interview</h3>
              <p>
                We check for a fit between your current profile and career goals
                with Stoa’s offerings. Expect to be grilled on a case study,
                guesstimate or sample business problem by our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeJourney;
