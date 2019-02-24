import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from "./ProgressBar";

storiesOf("ProgressBar", module).add("blink", () => (
  <ProgressBar>😀 😎 👍 💯</ProgressBar>
));
