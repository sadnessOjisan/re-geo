import React from "react";
import { storiesOf } from "@storybook/react";
import Marquee from "./Marquee";

storiesOf("Marquee", module)
  .add("move", () => <Marquee>😀 😎 👍 💯</Marquee>)
  .add("right", () => <Marquee direction="right">😀 😎 👍 💯</Marquee>);
