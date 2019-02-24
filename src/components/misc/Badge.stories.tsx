import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge";

storiesOf("Badge", module)
  .add("default", () => <Badge>default</Badge>)
  .add("success", () => <Badge type="success">success</Badge>)
  .add("warning", () => <Badge type="warning">warning</Badge>)
  .add("important", () => <Badge type="important">important</Badge>)
  .add("info", () => <Badge type="info">info</Badge>)
  .add("inverse", () => <Badge type="inverse">inverse</Badge>);
