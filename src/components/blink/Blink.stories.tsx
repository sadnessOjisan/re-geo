import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import Blink from "./Blink";
import { withInfo } from "@storybook/addon-info";

const text = `  
### what
blink tag.
`;
const stories = storiesOf("Blink", module);

stories
  .add(
    "normal",
    withInfo({
      inline: true,
      text: text
    })(() => {
      return <Blink>😀 😎 👍 💯</Blink>;
    })
  )
  .add(
    "fast",
    withInfo({
      inline: true,
      text: text
    })(() => {
      return <Blink speed={0.05}>😀 😎 👍 💯</Blink>;
    })
  )
  .add(
    "late",
    withInfo({
      inline: true,
      text: text
    })(() => {
      return <Blink speed={1}>😀 😎 👍 💯</Blink>;
    })
  );
