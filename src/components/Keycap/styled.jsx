import styled from "styled-components";

export const Wrapper = styled.div`
 height: 80px;
 width: 100px;
 background-color: #7f7f7f;
 box-shadow: inset 0 20px 10px 5px #eaeaea, inset 0 0 10px 5px #3e3e3e,
  0 5px 10px 10px #0000004a;
 border-radius: 5px;
 position: relative;
 transition: all 0.1s;

 &:active {
  box-shadow: inset 0 20px 10px 1px #eaeaea, inset 0 0 10px 5px #3e3e3e,
   0 5px 10px 2px #0000004a;
 }
`;

export const Top = styled.button`
 height: 80px;
 width: 100px;
 background-color: #cdcdcd;
 box-shadow: inset 0 0 10px 5px #eaeaea;
 border-radius: 5px;
 position: absolute;
 left: 0;
 bottom: 20px;
 border: none;
 outline: none;
 transition: 0.1s;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 & > span {
  color: #00b3ff;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 0 20px #00b3ff, 0 0 30px #00b3ff;
  transition: 0.1s;
 }

 &:active {
  bottom: 5px;

  & > span {
   filter: brightness(110%);
  }
 }
`;
