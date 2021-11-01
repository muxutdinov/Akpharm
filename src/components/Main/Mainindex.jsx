import React from "react";
import { AllWrapper, Container } from "./MainStyle";
import Navbar from "./Navbar/index";
import Body from "./Body";
import Bodycard from "../Body-card";

export const Mainindex = () => {
  return (
    <>
      <AllWrapper>
        <Container>
          <Navbar />
          <Body />
        </Container>
        <Bodycard />
      </AllWrapper>
    </>
  );
};
export default Mainindex;
