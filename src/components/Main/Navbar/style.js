import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1300px;
  height: 60px;
  background: transparent;
`;
export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 42px;
  width: 700px;
  margin-left: 200px;
  margin-right: 50px;
`;
export const Wrap = styled.div`
  width: 91px;
  height: 19px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 44px;
  :hover {
    transition: all 0.5s;
    cursor: pointer;
    color: blue;
  }
`;
export const Button = styled.button`
  font-weight: 900;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  width: 173px;
  height: 43px;
  background: #ffffff;
  border-radius: 12px;
  flex: none;
  order: 5;
  flex-grow: 0;
  margin: 0px 44px;
`;
export const WrapperSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;
export const Iconone = styled.img`
  height: 30px;
  width: 40px;
`;
export const Icontwo = styled.img`
  height: 30;
  width: 100px;
`;
