import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Pill from "./Pill";
import PillNav from "./PillNav";

const text = `  
### what
blink tag.
`;

storiesOf("Pill", module).add(
  "default",
  withInfo({
    inline: true,
    text: text,
  })(() => (
    <PillNav>
      <Pill>default</Pill>
      <Pill isActive={true}>active</Pill>
      <Pill isDisable={true}>diasable</Pill>
    </PillNav>
  ))
);
