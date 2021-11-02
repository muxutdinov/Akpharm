import React from "react";
import { AllWrapper, Container } from "./MainStyle";
import Navbar from "./Navbar/index";
import Body from "./Body";
import Bodycard from "../Body-card";
import DemoCarousel from "../Carusel";

export const Mainindex = () => {
  return (
    <>
      <AllWrapper>
        <Container>
          <Navbar />
          <Body />
        </Container>
        <Bodycard />
      <DemoCarousel />
      </AllWrapper>
    </>
  );
};
export default Mainindex;
