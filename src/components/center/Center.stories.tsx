import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Center from "./Center";

const text = `  
### what
blink tag.
`;

storiesOf("Center", module)
  .add(
    "v_h center",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Wrapper>
        <Center vertical horizontal>
          😀 😎 👍 💯
        </Center>
      </Wrapper>
    ))
  )
  .add(
    "h center",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Wrapper>
        <Center horizontal>😀 😎 👍 💯</Center>
      </Wrapper>
    ))
  )
  .add(
    "v center",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Wrapper>
        <Center vertical>😀 😎 👍 💯</Center>
      </Wrapper>
    ))
  );

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;
