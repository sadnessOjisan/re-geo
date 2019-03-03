import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Center from "./Center";

const text = `  
  ### what
  Center tag.

  ### why I need
  center tag is deprecated in html5. [w3cschool](https://www.w3schools.com/tags/tag_center.asp). 

  this tag was used in geo cities web site. 

  And, I wanna revive in html5.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/button/Button.tsx)
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
