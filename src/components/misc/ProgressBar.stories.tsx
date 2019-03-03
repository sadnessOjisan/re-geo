import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ProgressBar from "./ProgressBar";

const text = `  
### what
blink tag.
`;

storiesOf("ProgressBar", module).add(
  "blink",
  withInfo({
    inline: true,
    text: text
  })(() => <ProgressBar>😀 😎 👍 💯</ProgressBar>)
);
