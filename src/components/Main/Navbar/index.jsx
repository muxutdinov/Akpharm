import React from "react";
import top from "../../../assets/icons/top.svg";
import solid from "../../../assets/icons/solid.svg";
import {
  Button,
  Container,
  Iconone,
  Icontwo,
  Wrap,
  Wrapper,
  WrapperSecond,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <WrapperSecond>
        <Iconone src={top} />
        <Icontwo src={solid} />
      </WrapperSecond>
      <Wrapper>
        <Wrap>Mahsulotlar katalogi</Wrap>
        <Wrap>Hamkorlar</Wrap>
        <Wrap>Til</Wrap>
        <Button>Ariza qoldirish</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
