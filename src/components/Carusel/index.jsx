// import React from "react";
// import Slider from "react-slick";
import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper } from "./style";

export default class CenterMode extends Component {
  render() {
      
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <Container>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <Wrapper>1</Wrapper>
          <Wrapper>2</Wrapper>
          <Wrapper>3</Wrapper>
          <Wrapper>4</Wrapper>
          <Wrapper>5</Wrapper>
          <Wrapper>6</Wrapper>
        </Slider>
      </Container>
    );
  }
}
