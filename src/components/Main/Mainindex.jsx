import React from "react";
import { AllWrapper, Container, DemoWrapper } from "./MainStyle";
import Navbar from "./Navbar/index";
import Body from "./Body";
import Bodycard from "../Body-card";
import CenterMode from "../Slider";

export const Mainindex = () => {
  return (
    <>
      <AllWrapper>
        <Container>
          <Navbar />
          <Body />
        </Container>
        <Bodycard />
        <CenterMode />
      </AllWrapper>
    </>
  );
};
export default Mainindex;
