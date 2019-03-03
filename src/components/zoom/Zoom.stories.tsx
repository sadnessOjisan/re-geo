import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Zoom from "./Zoom";

const text = `  
### what
blink tag.
`;

storiesOf("zoom", module)
  .add(
    "default",
    withInfo({
      inline: true,
      text: text
    })(() => <Zoom>Hello Zoom</Zoom>)
  )
  .add(
    "speedy",
    withInfo({
      inline: true,
      text: text
    })(() => <Zoom speed={1}>Hello Zoom</Zoom>)
  )
  .add(
    "slow",
    withInfo({
      inline: true,
      text: text
    })(() => <Zoom speed={10}>Hello Zoom</Zoom>)
  );
