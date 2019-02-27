import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Center from "./Center";

storiesOf("Center", module)
  .add("v_h center", () => (
    <Wrapper>
      <Center vertical={true} horizontal={true}>
        😀 😎 👍 💯
      </Center>
    </Wrapper>
  ))
  .add("h center", () => (
    <Wrapper>
      <Center horizontal={true}>😀 😎 👍 💯</Center>
    </Wrapper>
  ))
  .add("v center", () => (
    <Wrapper>
      <Center vertical={true}>😀 😎 👍 💯</Center>
    </Wrapper>
  ));

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;
