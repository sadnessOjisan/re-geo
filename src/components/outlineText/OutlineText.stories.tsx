import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import OutlineText from "./OutlineText";

const text = `  
### what
blink tag.
`;

storiesOf("OutlineText", module)
  .add(
    "red",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <OutlineText
        size={36}
        strokeWidth={2}
        inlineColor="white"
        outlineColor="red"
      >
        Hello OutlineText
      </OutlineText>
    ))
  )
  .add(
    "blue",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <OutlineText
        size={36}
        strokeWidth={2}
        inlineColor="white"
        outlineColor="blue"
      >
        Hello OutlineText
      </OutlineText>
    ))
  )
  .add(
    "inner red",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <OutlineText
        size={36}
        strokeWidth={2}
        inlineColor="red"
        outlineColor="blue"
      >
        Hello OutlineText
      </OutlineText>
    ))
  );
