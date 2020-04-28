import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Blink from "./Blink";

const text = `  
  ### what
  Blink Tag.

  ### Note
  more decrease speed property, gain more speed.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/blink/Blink.tsx)
`;

const stories = storiesOf("Blink", module);

stories
  .add(
    "normal",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return <Blink>😀 😎 👍 💯</Blink>;
    })
  )
  .add(
    "fast",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return <Blink speed={0.05}>😀 😎 👍 💯</Blink>;
    })
  )
  .add(
    "late",
    withInfo({
      inline: true,
      text: text,
    })(() => {
      return <Blink speed={1}>😀 😎 👍 💯</Blink>;
    })
  );
