import React from "react";
import "../Career/Career.scss";
import Tick from "../../../../assets/icons/tick.svg";
import UndrawCoding from "../../../../assets/images/undraw-coding.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "./Career.array";

const settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Career: React.FC = () => {
  return (
    <div className="career-container">
      <div className="mx pad">
        <div className="countCareers">
          <div className="career">
            <h2>
              <span className="text-coloring">Count on us</span> to
            </h2>
            <h2>accelerate your career</h2>
            <p>
              Stoa L1 / L2 holders get access to our partner companies and
              talent management services.
            </p>
          </div>
          <div className="interview-img2">
            <img src={UndrawCoding} alt="" />
          </div>
          <div className="interview-content">
            <div className="tick">
              <div>
                <div className="interview">
                  <img src={Tick} alt="" />
                  <p>Get help figuring out the right role</p>
                </div>
                <div className="interview">
                  <img src={Tick} alt="" />
                  <p>Referrals to 200+ companies</p>
                </div>
              </div>
              <div>
                <div className="interview">
                  <img src={Tick} alt="" />
                  <p>CV and Interview preparation</p>
                </div>
                <div className="interview">
                  <img src={Tick} alt="" />
                  <p>Coaching on salary negotiation</p>
                </div>
              </div>
            </div>
            <div className="interview-img">
              <img src={UndrawCoding} alt="" />
            </div>
          </div>

          <div className="slider">
            <Slider {...settings} className="slide-track">
              {Images.map((f, index) => (
                <>
                  <div key={index} className="slide">
                    <f.Images />
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
