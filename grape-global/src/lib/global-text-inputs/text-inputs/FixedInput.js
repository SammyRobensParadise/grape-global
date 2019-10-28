import React from "react";
import styled from "styled-components";

const InputWrapperNotScrollable = styled.textarea`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
  white-space: normal;
`;
const GetTextArea = ({ type, size, width, height }) => {
  return (
    <InputWrapperNotScrollable
      type={type}
      size={size}
      width={width}
      height={height}
    />
  );
};
const CLASSNAME = "single-input";
const FixedInput = ({ type, size, width, height }) => (
  <div className={CLASSNAME}>
    <GetTextArea type={type} size={size} width={width} height={height} />
  </div>
);

export default FixedInput;
