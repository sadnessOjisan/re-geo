import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Pager from "./Pager";

const text = `  
### what
blink tag.
`;

storiesOf("Pager", module)
  .add(
    "default",
    withInfo({
      inline: true,
      text: text
    })(() => <Pager>default</Pager>)
  )
  .add(
    "disabled",
    withInfo({
      inline: true,
      text: text
    })(() => <Pager type="disabled">disabled</Pager>)
  );
