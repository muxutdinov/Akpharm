import React from "react";
import team from "../../assets/imges/team.png";
import student from "../../assets/imges/student.png";
import {
  Containers,
  Imgfirst,
  Imgsecond,
  MiniCon,
  Title,
  Wrapperone,
  Wrappertwo,
  Text,
  Statistics,
  MiniTitle,
  Number,
  MiniText,
  Border,
} from "./style";

const Bodycard = () => {
  return (
    <Containers>
      <Wrapperone>
        <Imgfirst src={student} />
        <Imgsecond src={team} />
      </Wrapperone>
      <Wrappertwo>
        <MiniCon>
          <Title>Biz haqimizda</Title>
        </MiniCon>
        <MiniCon>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            quasi placeat sapiente similique sed, laboriosam perspiciatis
            quisquam, molestiae ipsa ad alias! Nobis ducimus facere debitis
            laboriosam et nemo ab eos ipsam, dolorem quidem beatae maiores hic
            quibusdam praesentium delectus temporibus nihil voluptatibus
            pariatur? Nam debitis unde, at reiciendis nisi fugit?
          </Text>
        </MiniCon>
        <MiniCon>
          <Statistics>
            <MiniTitle >
              <Number>340</Number>
              <MiniText>Xodimlar</MiniText>
            </MiniTitle>
            <Border />
            <MiniTitle >
              <Number>180</Number>
              <MiniText>Taminotchilar</MiniText>
            </MiniTitle>
            <Border />
            <MiniTitle>
              <Number>600</Number>
              <MiniText>Xaridorlar</MiniText>
            </MiniTitle>
          </Statistics>
        </MiniCon>
      </Wrappertwo>
    </Containers>
  );
};

export default Bodycard;
