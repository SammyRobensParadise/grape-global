import React from "react";
import styled from "styled-components";

const ButttonEl = styled.div`
  height: 30px;
  box-shadow: ${p =>
    p.dropShadow ? "0px 16px 40px -7px rgba(153,153,153,1)" : "none"};
`;
const ButtonLeftSide = styled.div`
  width: 200px;
  height: 30px;
  background-color: ${p => (p.leftFocus ? "#2ebf91" : "#fff")};
  border-radius: 10px 0px 0px 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #2ebf91;
  float: left;
  margin-right: 0px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
const ButtonRightSide = styled.div`
  width: 200px;
  height: 30px;
  background-color: ${p => (p.rightFocus ? "#2ebf91" : "#fff")};
  border-radius: 0px 10px 10px 0px;
  border-width: 2px;
  border-style: solid;
  border-color: #2ebf91;
  float: right;
  margin-left: 0px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
const ButtonText = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 200;
font-size 16px;
color: ${p =>
  p.left && p.leftFocus
    ? "#fff"
    : p.right && p.rightFocus
    ? "#fff"
    : "#2ebf91"};
height: 58px;
padding-top: 7px;
text-align: center
`;
const BUTTON_CLASSNAME = "multi-button-wrapper";
const MultiButton = ({
  textLeft,
  textRight,
  leftEvent,
  rightEvent,
  leftFocus,
  rightFocus,
  dropShadow
}) => (
  <div className={BUTTON_CLASSNAME}>
    <ButttonEl dropShadow={dropShadow}>
      <ButtonLeftSide onClick={leftEvent} leftFocus={leftFocus}>
        <ButtonText leftFocus={leftFocus} rightFocus={rightFocus} left>
          {textLeft}
        </ButtonText>
      </ButtonLeftSide>
      <ButtonRightSide onClick={rightEvent} rightFocus={rightFocus}>
        <ButtonText leftFocus={leftFocus} rightFocus={rightFocus} right>
          {textRight}
        </ButtonText>
      </ButtonRightSide>
    </ButttonEl>
  </div>
);

export default MultiButton;
