import React from "react";
import "../CharterLevels/CharterLevels.scss";
import User from "../../../../assets/logo/users.svg";
import Radio from "../../../../assets/logo/radio.svg";
import Video from "../../../../assets/logo/video.svg";
import { Button } from "../../../../components";

const CharterLevel = () => {
  return (
    <div className="CharterLevel-container">
      <div className="mx pad">
        <div className="CharterLevel">
          <h1>The Charter Levels</h1>
          <p>The level you reach is an endorsement of your business impact.</p>
          <div className="boxs">
            <div className="box-content">
              <span className="text-coloring">De L1</span>
              <h5>Generalist</h5>
              <p>
                Clearing Level 1 is a testament to one’s problem-solving
                abilities and understanding of core business fundamentals. L1s
                work across domains.
              </p>
              <div className="minimum-content">
                <div className="minimum">
                  <h4>₹ 8 LPA</h4>
                  <p>MINIMUM SALARY</p>
                </div>
                <div className="minimum">
                  <h4>Biz. Associate</h4>
                  <p>TIER ROLES</p>
                </div>
              </div>
              <div>
                <div className="some">
                  <p>
                    SOME OF OUR <span className="de">De L1s</span>
                  </p>
                  <div className="border"></div>
                </div>
                <div className="review-content">
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Hritika Singh</h3>
                    <p>
                      Joined in the early team at Threado, in a content strategy
                      role.
                    </p>
                  </div>
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Ramasamy</h3>
                    <p>
                      Transitioned from engg operations to growth associate.
                    </p>
                  </div>
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Amogh Pachpor</h3>
                    <p>
                      From a dev role to a community manager role at Scaler.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-content">
              <span className="text-coloring">De L2</span>
              <h5>Specialist</h5>
              <p>
                Clearing Level 2 attests to grasp over a business domain.
                Currently offered in Marketing, Product and BizOps.
              </p>
              <div className="minimum-content">
                <div className="minimum">
                  <h4>₹ 16 LPA</h4>
                  <p>MINIMUM SALARY</p>
                </div>
                <div className="minimum">
                  <h4>Lead / Manager</h4>
                  <p>TIER ROLES</p>
                </div>
              </div>
              <div>
                <div className="some">
                  <p>
                    SOME OF OUR <span className="de">De L2s</span>
                  </p>
                  <div className="border"></div>
                </div>
                <div className="review-content">
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Hritika Singh</h3>
                    <p>
                      Joined in the early team at Threado, in a content strategy
                      role.
                    </p>
                  </div>
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Ramasamy</h3>
                    <p>
                      Transitioned from engg operations to growth associate.
                    </p>
                  </div>
                  <div className="review">
                    <div className="circle"></div>
                    <h3>Amogh Pachpor</h3>
                    <p>
                      From a dev role to a community manager role at Scaler.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="join-club">
            <h1>
              The <span className="text-coloring">De Program</span>
            </h1>
            <h1>your path to join the club</h1>
            <p>
              Each week-long skill 'sprint' is a mix of solo and live
              group-based learning.
            </p>
          </div>

          <div className="users-content">
            <div className="users">
              <img src={User} alt="" />
              <p>Flexible schedule for working professionals</p>
            </div>
            <div className="users">
              <img src={Radio} alt="" />
              <p>Live team-based business hackathons</p>
            </div>
            <div className="users">
              <img src={Video} alt="" />
              <p>1:1 career coaching and mentoring</p>
            </div>
          </div>

          <div className="curriculumBtn">
            <Button
              variant="primary"
              children="Curriculum, Schedule, Faculty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharterLevel;
