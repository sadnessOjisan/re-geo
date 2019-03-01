import * as React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Background from "./Background";

storiesOf("Background", module)
  .add("stars", () => (
    <Wrapper>
      <Background pattern="stars">😀 😎 👍 💯</Background>
    </Wrapper>
  ))
  .add("microfab", () => (
    <Wrapper>
      <Background pattern="microfab">😀 😎 👍 💯</Background>
    </Wrapper>
  ))
  .add("rainbow", () => (
    <Wrapper>
      <Background pattern="rainbow">😀 😎 👍 💯</Background>
    </Wrapper>
  ));

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
