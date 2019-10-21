import React from "react";
import { render } from "react-dom";
import { TextInput } from "./lib";
import { Button } from "./lib";
import styled from "styled-components";

const wrapper = styled.div``;
const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Button
      text="Sign Up"
      small={true}
      event={() => alert("Button Clicked!")}
    ></Button>
  </div>
);

render(<App />, document.getElementById("root"));
