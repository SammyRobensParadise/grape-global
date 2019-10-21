import React from "react";
import styled from "styled-components";

const ButttonEl = styled.div`
  background-color: #2ebf91;
  width: ${p => (p.small ? "148px" : "230px")};
  text-align: center;
  height: 58px;
  border-radius: 20px;
  box-shadow: ${p =>
    p.dropShadow ? "0px 16px 51px -7px rgba(153,153,153,1)" : "none"};
  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 200;
font-size 18px;
color: #fff;
height: 58px;
padding-top: 18px;
`;
const BUTTON_CLASSNAME = "button-wrapper";
const Button = ({ text, type, hover, invert, small, dropShadow, event}) => (
  <div className={BUTTON_CLASSNAME}>
    <ButttonEl dropShadow={dropShadow} small={small} onClick={event} >
      <ButtonText>{text}</ButtonText>
    </ButttonEl>
  </div>
);

export default Button;