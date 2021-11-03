import React from "react";
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
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <>
      <div>
        <h2 className="maxsulotlar">Akpharmdagi maxsulotlar karalogi</h2>
        <Slider {...settings} className="Container" autoplay>
          <div className="itemSlider">
            <img src={img1} height="100%" width="100%" />
          </div>
          <div className="itemSlider">
            <img src={img2} height="100%" width="100%" />
          </div>
          <div className="itemSlider">
            <img src={img1} height="100%" width="100%" />
          </div>
          <div className="itemSlider">
            <img src={img3} height="100%" width="100%" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CenterMode;
