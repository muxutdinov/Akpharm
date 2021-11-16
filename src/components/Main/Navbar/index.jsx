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
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const onLanguageHandle = (newLang) => {
    i18n.changeLanguage(newLang);
    window.localStorage.setItem("language", newLang);
  };
  return (
    <Container>
      <WrapperSecond>
        <Iconone src={top} />
        <Icontwo src={solid} />
      </WrapperSecond>
      <Wrapper>
        <Wrap>Mahsulotlar katalogi</Wrap>
        <Wrap>Hamkorlar</Wrap>
        <Wrap>
          <button
            onClick={() => {
              onLanguageHandle("uz");
            }}
          >
            uz
          </button>
          <button
            onClick={() => {
              onLanguageHandle("ru");
            }}
          >
            ru
          </button>
          <button
            onClick={() => {
              onLanguageHandle("en");
            }}
          >
            en
          </button>
        </Wrap>
        <Button>Ariza qoldirish</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
