import React from "react";
import styled from "styled-components";

const InputWrapperScrollable = styled.textarea`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  width: 615px;
  height: 40px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  white-space: nowrap;
`;
const InputWrapperNotScrollable = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  width: 615px;
  height: 60px;
  border-radius: 10px;
  background: #ebebeb;
  border-width: 1px;
  border-style: solid;
  border-color: #d3d3d3;
  font-size: 20px;
  padding-left: 20px;
`;
const GetTextArea = ({ type, size, scrollAndResize }) => {
  return scrollAndResize ? (
    <InputWrapperScrollable type={type} size={size} />
  ) : (
    <InputWrapperNotScrollable type={type} size={size} />
  );
};
const CLASSNAME = "single-input";
const SingleInput = ({ type, size, scrollAndResize }) => (
  <div className={CLASSNAME}>
    <GetTextArea type={type} size={size} scrollAndResize={scrollAndResize} />
  </div>
);

export default SingleInput;
