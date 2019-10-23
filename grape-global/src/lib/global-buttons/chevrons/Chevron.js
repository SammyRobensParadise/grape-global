import React from "react";
import styled from "styled-components";
const up = "UP";
const down = "DOWN";
const left = "LEFT";
const right = "RIGHT";
const ChevWrapperRight = styled.div`
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid green;
`;
const ChevWrapperLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid blue;
`;
const ChevWrapperUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
`;
const ChevWrapperDown = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
`;
const GetStyle = (direction, color) => {
    debugger
  switch (direction) {
    case 'UP': {
      return <ChevWrapperUp color={color}></ChevWrapperUp>;
    }
    case 'DOWN': {
      return <ChevWrapperDown color={color}></ChevWrapperDown>;
    }
    case 'RIGHT': {
      return <ChevWrapperRight color={color}></ChevWrapperRight>;
    }
    default: {
      return <ChevWrapperLeft color={color}></ChevWrapperLeft>;
    }
  }
};
const CLASSNAME = "chevron";
const Chevron = ({ direction, color }) => (
  <div className={CLASSNAME}>
    <GetStyle direction={direction} color={color}></GetStyle>
  </div>
);

export default Chevron;
