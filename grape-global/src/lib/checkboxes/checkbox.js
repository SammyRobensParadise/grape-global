import React from "react";
import styled from "styled-components";

const CheckedOne = styled.div`
  width: 40px;
  height: 7px;
  background: #2ebf91;
  transform: rotate(-45deg);
`;
const CheckedTwo = styled.div`
  width: 20px;
  height: 7px;
  background: #2ebf91;
  transform: translateX(-7px) translateY(-0px) rotate(45deg);
`;
const CheckedWrapper = styled.div`
transform: translateX(8px) translateY(4px);
`;
const Box = styled.div`
  width: 30px;
  height: 30px;
  border: solid ${p => p.borderColor} 3px;
  &:hover{
      cursor: pointer;
      background: #F5F5F5;
  }
`;
const CheckMark = ({ checked }) => {
  return checked ? (
    <CheckedWrapper>
      <CheckedOne></CheckedOne>
      <CheckedTwo></CheckedTwo>
    </CheckedWrapper>
  ) : (
    <div></div>
  );
};

const CLASSNAME = "check-box";
const CheckBox = ({ checked,borderColor }) => (
  <div className={CLASSNAME}>
    <Box borderColor={borderColor}>
      <CheckMark checked={checked}></CheckMark>
    </Box>
  </div>
);

export default CheckBox;
