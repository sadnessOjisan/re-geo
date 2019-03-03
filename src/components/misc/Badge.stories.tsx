import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Badge from "./Badge";

const text = `  
### what
blink tag.
`;

storiesOf("Badge", module)
  .add(
    "default",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge>default</Badge>)
  )
  .add(
    "success",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge type="success">default</Badge>)
  )
  .add(
    "warning",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge type="warning">default</Badge>)
  )
  .add(
    "important",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge type="important">default</Badge>)
  )
  .add(
    "info",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge type="info">default</Badge>)
  )
  .add(
    "inverse",
    withInfo({
      inline: true,
      text: text
    })(() => <Badge type="inverse">default</Badge>)
  );
