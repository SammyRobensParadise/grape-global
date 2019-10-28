import React from "react";
import { render } from "react-dom";
import { Button, MultiButton, Chevron, SingleInput, FixedInput } from "./lib";
import { Container, Jumbotron } from "reactstrap";
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
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro&display=swap");
  font-family: "Source Code Pro", monospace;
  font-weight: 100;
  border-radius: 3px;
  margin-bottom: 30px;
  width: 250px;
  height: 100%;
  margin-top: 45px;
  text-align: left;
`;
const Subsection = styled.p`
  text-align: center;
`;

const App = () => (
  <Wrapper>
    <Jumbotron>
      <Title>Raindrop | Design</Title>

      <Subsection>
        Simple design components that, used together, build beauiful user
        interfaces, built in React.js.
      </Subsection>
      <Subsection>
        Created with ❤️ by{" "}
        <a href="https://sammyrp.com">Sammy Robens-Paradise</a> for Grape.
      </Subsection>
    </Jumbotron>
    <SectionGradient></SectionGradient>
    <ButtonsSection></ButtonsSection>
    <InputSection></InputSection>
  </Wrapper>
);

const ButtonsSection = () => (
  <Container>
    <Jumbotron>
      <SectionTitle>Buttons and Toggles</SectionTitle>
    </Jumbotron>
    <Container>
      <Content>
        <Code>Button Props: text,small,event</Code>
        <Button
          text="Sign Up"
          small={true}
          event={() => alert("Button Clicked!")}
          hover={true}
        ></Button>
      </Content>
      <Content>
        <Code>Button Props: text,small,event,dropShadow</Code>
        <Button
          text="Sign Up"
          small={true}
          event={() => alert("Button Clicked!")}
          dropShadow={true}
          hover={true}
        ></Button>
      </Content>
      <Content>
        <Code>Button Props: text,small,event,hover,invert</Code>
        <Button
          text="Sign Up"
          small={true}
          invert={true}
          hover={true}
          event={() => alert("Button Clicked!")}
        ></Button>
      </Content>
      <Content>
        <Code>Button Props: text,small,event,dropShadow,hover,invert</Code>
        <Button
          text="Sign Up"
          small={true}
          invert={true}
          hover={true}
          dropShadow={true}
          event={() => alert("Button Clicked!")}
        ></Button>
      </Content>
      <Content>
        <Code>
          {" "}
          MultiButton Props:
          textLeft,textRight,leftFocus,RightFocus,leftEvent,RightEvent
        </Code>
        <MultiButton
          textLeft="Left Buttton"
          textRight="Right Button"
          leftFocus={true}
          rightFocus={false}
          leftEvent={() => alert("left button clicked")}
          rightEvent={() => alert("right button clicked")}
        />
      </Content>
      <br></br>
      <Content>
        <Code>
          {" "}
          MultiButton Props:
          textLeft,textRight,leftFocus,RightFocus,leftEvent,RightEvent,dropShadow
        </Code>
        <MultiButton
          textLeft="Left Buttton"
          textRight="Right Button"
          leftFocus={false}
          rightFocus={true}
          leftEvent={() => alert("left button clicked")}
          rightEvent={() => alert("right button clicked")}
          dropShadow={true}
        ></MultiButton>
      </Content>
      <br></br>
      <Content>
        <Code> Chevron Props: direction, color</Code>
        <Chevron direction="RIGHT" color="#2EBF91"></Chevron>
      </Content>
      <Content>
        <Code> Chevron Props: direction, color</Code>
        <Chevron direction="LEFT" color="#361E5C"></Chevron>
      </Content>
      <Content>
        <Code> Chevron Props: direction, color</Code>
        <Chevron direction="UP" color="#361E5C"></Chevron>
      </Content>
      <Content>
        <Code> Chevron Props: direction, color</Code>
        <Chevron direction="DOWN" color="#2EBF91"></Chevron>
      </Content>
    </Container>
  </Container>
);

const InputSection = () => (
  <Container>
    <Jumbotron>
      <SectionTitle>Inputs and Text Fields</SectionTitle>
    </Jumbotron>
    <Content>
      <Code>Text Input Resizable and Scrollable Props: type,size,scrollAndResize</Code>
      <SingleInput type="text" size="30" scrollAndResize={true}></SingleInput>
    </Content>
    <br></br>
    <Content>
      <Code>Text Input Resizable Default Props: type,size,scrollAndResize</Code>
      <SingleInput type="text" size="30" scrollAndResize={false}></SingleInput>
    </Content>
    <br></br>
    <Content>
      <Code>Text Input Resizable Default Props: type,size,width,height</Code>
      <FixedInput type="text" size="30" width={800} height={300}></FixedInput>
    </Content>
  </Container>
);
render(<App />, document.getElementById("root"));
