import React from "react";
import { Img } from "./Slider";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/imges/main.png";
import img2 from "../../assets/imges/student.png";
import img3 from "../../assets/imges/team.png";

const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
  };
  return (
    <>
      <div style={{ width: "100%", padding: 20 }}>
        <h2 className="maxsulotlar">Akpharmdagi maxsulotlar katalogi</h2>
        <Slider {...settings} className="Container">
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img1} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img2} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img3} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img1} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img2} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <Img src={img1} />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CenterMode;
