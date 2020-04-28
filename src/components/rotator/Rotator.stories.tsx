import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Rotator from "./Rotator";

const text = `  
### what
blink tag.
`;

storiesOf("Rotator", module)
  .add(
    "0 => 360",
    withInfo({
      inline: true,
      text: text,
    })(() => <Rotator>Hello Rotator</Rotator>)
  )
  .add(
    "speedy",
    withInfo({
      inline: true,
      text: text,
    })(() => <Rotator speed={1}>Hello Rotator</Rotator>)
  )
  .add(
    "slow",
    withInfo({
      inline: true,
      text: text,
    })(() => <Rotator speed={10}>Hello Rotator</Rotator>)
  );
