import React from "react";
import { storiesOf } from "@storybook/react";
import Alerts from "./Alerts";

storiesOf("Alerts", module)
  .add("alert", () => (
    <Alerts type="alert">
      Best check yo self, you're not looking too good. Nulla vitae elit libero,
      a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl
      consectetur et.Best check yo self, you're not looking too good. Nulla
      vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et.Best check yo self, you're not looking too
      good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
      magna, vel scelerisque nisl consectetur et.Best check yo self, you're not
      looking too good. Nulla vitae elit libero, a pharetra augue. Praesent
      commodo cursus magna, vel scelerisque nisl consectetur et.
    </Alerts>
  ))
  .add("error", () => (
    <Alerts type="error">
      Change a few things up and try submitting again.
    </Alerts>
  ))
  .add("success", () => (
    <Alerts type="success">
      You successfully read this important alert message.
    </Alerts>
  ))
  .add("info", () => (
    <Alerts type="info">
      This alert needs your attention, but it's not super important.
    </Alerts>
  ));
