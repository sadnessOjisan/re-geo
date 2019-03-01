import React from "react";
import { storiesOf } from "@storybook/react";
import Blink from "./Blink";

storiesOf("Blink", module)
  .add("blink", () => <Blink>😀 😎 👍 💯</Blink>)
  .add("speedy", () => <Blink speed={0.05}>😀 😎 👍 💯</Blink>)
  .add("slowly", () => <Blink speed={1}>😀 😎 👍 💯</Blink>);
