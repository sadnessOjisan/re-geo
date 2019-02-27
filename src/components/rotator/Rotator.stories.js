import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Rotator from "./Rotator";

storiesOf("Rotator", module)
  .add("0 => 360", () => <Rotator>Hello Rotator</Rotator>)
  .add("speedy", () => <Rotator speed={1}>Hello Rotator</Rotator>);
