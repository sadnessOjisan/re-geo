import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Alerts from "./Alerts";

const text = `  
### what
blink tag.
`;

storiesOf("Alerts", module)
  .add(
    "alert",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Alerts type="alert">
        Best check yo self, you're not looking too good. Nulla vitae elit
        libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et.Best check yo self, you're not looking too good.
        Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et.Best check yo self, you're
        not looking too good. Nulla vitae elit libero, a pharetra augue.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Best
        check yo self, you're not looking too good. Nulla vitae elit libero, a
        pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et.
      </Alerts>
    ))
  )
  .add(
    "error",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Alerts type="error">
        Change a few things up and try submitting again.
      </Alerts>
    ))
  )
  .add(
    "success",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Alerts type="success">
        Change a few things up and try submitting again.
      </Alerts>
    ))
  )
  .add(
    "info",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Alerts type="info">
        Change a few things up and try submitting again.
      </Alerts>
    ))
  );
