import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Font from "./Font";

const text = `  
### what
blink tag.
`;

storiesOf("Font", module)
  .add(
    "normal",
    withInfo({
      inline: true,
      text: text
    })(() => <Font>Hello Font</Font>)
  )
  .add(
    "red",
    withInfo({
      inline: true,
      text: text
    })(() => <Font color="red">Hello Font</Font>)
  )
  .add(
    "large",
    withInfo({
      inline: true,
      text: text
    })(() => <Font size={99}>Hello Font</Font>)
  )
  .add(
    "large blue",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Font size={99} color="blue">
        Hello Font
      </Font>
    ))
  );
