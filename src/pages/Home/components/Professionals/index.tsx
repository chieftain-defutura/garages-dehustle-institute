import React from "react";
import "../Professionals/Professionals.scss";
import Line from "../../../../assets/images/line.svg";
import Defutura from "../../../../assets/deNames/defutura.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Array } from "../Professionals/Profession.array";

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

const Professionals: React.FC = () => {
  return (
    <div className="professionals-container">
      <div className="mx pad">
        <div className="professionals">
          <div className="professionals-head">
            <h1>
              <span className="text-coloring">600+ professionals </span>have
              trusted us
            </h1>
            <h1>with their careers.</h1>
          </div>
          <div className="defutura">
            <Slider {...settings}>
              {Array.map((p, index) => (
                <>
                  <div key={index} className="defutura-box">
                    <div className="border-radio"></div>
                    <h5>{p.name}</h5>
                    <p>Pre-De</p>
                    <h4>{p.companyName}</h4>
                    <img src={Line} alt="" />
                    <p>Pre-De</p>
                    <img src={Defutura} className="defu" alt="" />
                    <h4>Frontend Developer</h4>
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

export default Professionals;
