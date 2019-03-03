import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Marquee from "./Marquee";

const text = `  
### what
blink tag.
`;

storiesOf("Marquee", module)
  .add(
    "move",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee>😀 😎 👍 💯</Marquee>)
  )
  .add(
    "right",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee direction="right">😀 😎 👍 💯</Marquee>)
  )
  .add(
    "alternate",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee behavior="alternate">😀 😎 👍 💯</Marquee>)
  )
  .add(
    "speedy",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee scrollamount={30}>😀 😎 👍 💯</Marquee>)
  );
