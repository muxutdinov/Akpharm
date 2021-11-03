import React from "react";
import img1 from "../../assets/imges/main.png";
import img2 from "../../assets/imges/student.png";
import img3 from "../../assets/imges/team.png";
import { Wrapper, Container, AllWrapper } from "./style";
import Slider from "react-slick";
const Carusel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="Container">
        <Slider {...settings} autoplay>
          <div className="slideItem">
            <img src={img1} height="200px" width="300px" />
          </div>
          <div className="slideItem">
            <img src={img2} height="200px" width="300px" />
          </div>
          <div className="slideItem">
            <img src={img3} height="200px" width="300px" />
          </div>
        </Slider>
      </div>
      <style jsx={true}>{`
        .slideItem {
          display: inline-flex !important;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Carusel;
