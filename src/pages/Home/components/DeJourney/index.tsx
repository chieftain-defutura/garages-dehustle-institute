import React from "react";
import "../DeJourney/DeJourney.scss";
import EarnLevel from "../../../../assets/images/earn-level.png";
import Learning from "../../../../assets/images/learning.png";
import Orientation from "../../../../assets/images/orientation.png";
import Admission from "../../../../assets/images/admissions-interview.png";
import Interview from "../../../../assets/video/interview.mp4";

const DeJourney = () => {
  return (
    <div className="deJourney-container">
      <div className="mx pad">
        <div className="deJourney">
          <h1>
            Your <span className="text-coloring">De Journey</span>
          </h1>
          <div className="journey-content">
            <div className="admission">
              <div>
                <img src={Admission} alt="" />
              </div>
              <div>
                <h3>Admissions Interview</h3>
                <p>
                  We check for a fit between your current profile and career
                  goals with Stoa’s offerings. Expect to be grilled on a case
                  study, guesstimate or sample business problem by our team.
                </p>
              </div>
            </div>
            <div className="admission">
              <div>
                <img src={Orientation} alt="" />
              </div>
              <div>
                <h3>Orientation</h3>
                <p>
                  A 3-day, in-person learning experience in Bengaluru to
                  acclimatise yourself to the Stoa ecosystem. Immerse yourself
                  in our principles, meet other candidates and understand the
                  basics of professional success.
                </p>
              </div>
            </div>
            <div className="admission">
              <div>
                <img src={Learning} alt="" />
              </div>
              <div>
                <h3>Learning</h3>
                <p>
                  Work alongside your program advisor to pick up the right set
                  of learning sprints in order to build your skill stack. Read
                  about concepts on the weekdays, and put them to practice live
                  on the weekend. Best part? You pick which week you want to
                  learn.
                </p>
              </div>
            </div>
            <div className="admission">
              <div>
                <img src={EarnLevel} alt="" />
              </div>
              <div>
                <h3>Earn Level</h3>
                <p>
                  To appear for your L1 / L2 evaluation, you need to complete a
                  specific number of sprints, work on a capstone project and
                  defend it in front of a jury. Access to Stoa’s talent
                  management services opens up after you clear your L1.
                </p>
              </div>
            </div>
          </div>

          <div className="videos">
            <video src={Interview} controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeJourney;
