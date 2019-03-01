import React from "react";
import { storiesOf } from "@storybook/react";
import Zoom from "./Zoom";

storiesOf("zoom", module)
  .add("0 => 360", () => <Zoom>Hello Zoom</Zoom>)
  .add("speedy", () => <Zoom speed={1}>Hello Zoom</Zoom>);
