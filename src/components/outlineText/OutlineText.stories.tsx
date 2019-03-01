import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import OutlineText from "./OutlineText";

storiesOf("OutlineText", module)
  .add("red", () => (
    <OutlineText
      size={36}
      strokeWidth={2}
      inlineColor="white"
      outlineColor="red"
    >
      Hello OutlineText
    </OutlineText>
  ))
  .add("blue", () => (
    <OutlineText
      size={36}
      strokeWidth={2}
      inlineColor="white"
      outlineColor="blue"
    >
      Hello OutlineText
    </OutlineText>
  ))
  .add("inner red", () => (
    <OutlineText
      size={36}
      strokeWidth={2}
      inlineColor="red"
      outlineColor="blue"
    >
      Hello OutlineText
    </OutlineText>
  ));
