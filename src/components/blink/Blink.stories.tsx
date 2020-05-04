import * as React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, number } from "@storybook/addon-knobs";
import Blink from "./Blink";

export default {
  title: "Blink",
  component: Blink,
  parameters: {
    info: {
      inline: true,
      text: `
      more decrease speed property, gain more speed.
    ~~~js
    <Blink speed={0.05}>😀 😎 👍 💯</Blink>;
    ~~~
  `,
    },
  },
  decorators: [withKnobs, withInfo],
};

export const Action = () => (
  <Blink speed={number("SPEED", 0.5)}>😀 😎 👍 💯</Blink>
);

Action.story = {
  name: "Blink",
};
