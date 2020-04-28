import * as React from "react";
import styled from "styled-components";
import { storiesOf, setAddon } from "@storybook/react";
import Background from "./Background";
import { withInfo } from "@storybook/addon-info";

const text = `  
  ### what
  Image Tiles.

  ### Caution
  This component has 100% height and width.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/background/Background.tsx)
`;

const stories = storiesOf("Background", module);

stories
  .add(
    "stars",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return (
        <Wrapper>
          <Background pattern="stars">
            💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯
          </Background>
        </Wrapper>
      );
    })
  )
  .add(
    "microfab",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return (
        <Wrapper>
          <Background pattern="microfab">
            💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯
          </Background>
        </Wrapper>
      );
    })
  )
  .add(
    "rainbow",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return (
        <Wrapper>
          <Background pattern="rainbow">
            💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯💯
          </Background>
        </Wrapper>
      );
    })
  );

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
