import React from "react";
import { render } from "react-dom";
import { Button } from "./lib";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  height: 100%;
  margin-left: 0px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 30pt;
  color: #000000;
  font-weight: 100;
`;
const SectionGradient = styled.div`
  width: 100%;
  height: 20px;
  background: rgb(38, 159, 157);
  background: radial-gradient(
    circle,
    rgba(38, 159, 157, 1) 0%,
    rgba(89, 39, 181, 1) 100%
  );
  margin-left: 0px;
  margin-right: 0px;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 20pt;
  color: #000000;
  font-weight: 100;
`;
const Content = styled.div`
text-align: center
display: inline-block;
position: relative;
padding-left: 45px;
&:after{
  float: left;

}
`;
const Code = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro&display=swap');
font-family: 'Source Code Pro', monospace;
font-weight: 100;
background-color: #DCDCDC;
border-radius: 3px;
margin-bottom: 30px;
width: 160px;
height: 100%;
`
const Subsection = styled.p`
text-align: center
`
const App = () => (
  <Wrapper>
    <Jumbotron>
      <Title>Coetus | Design</Title>

      <Subsection>Simple Design components that when used together help build beauiful user interfaces.</Subsection>
      <Subsection>Created with  ❤️ by <a href="https://sammyrp.com">Sammy Robens-Paradise</a> for Grape.</Subsection>
    </Jumbotron>
    <SectionGradient></SectionGradient>
    <ButtonsSection></ButtonsSection>
  </Wrapper>
);

const ButtonsSection = () => (
  <Container>
    <Jumbotron>
      <SectionTitle>Buttons and Toggles</SectionTitle>
    </Jumbotron>
    <Container>
        <Content>
        <Code>Props: text,small,event</Code>
          <Button
            text="Sign Up"
            small={true}
            event={() => alert("Button Clicked!")}
          ></Button>
        </Content>
      <Content>
          <Button
            text="Sign Up"
            small={true}
            event={() => alert("Button Clicked!")}
          ></Button>
        </Content>
    </Container>
  </Container>
);
render(<App />, document.getElementById("root"));
