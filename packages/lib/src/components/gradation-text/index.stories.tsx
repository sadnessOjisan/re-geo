import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { GradationText as Component } from "./index";

export default {
  title: "Gradation",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>hello world!!</Component>
);

export const ThreeCorlor = Template.bind({});
ThreeCorlor.args = {
  colors: [
    {
      color: "green",
      point: "0%",
    },
    {
      color: "#0ff",
      point: "25%",
    },
    {
      color: "#f00",
      point: "70%",
    },
  ],
  __unsafe__style: {
    fontSize: 80,
  },
};

export const Animation = Template.bind({});
Animation.args = {
  colors: [
    {
      color: "green",
      point: "33%",
    },
    {
      color: "#0ff",
      point: "66%",
    },
    {
      color: "#f00",
      point: "100%",
    },
  ],
  isAnimation: true,
  __unsafe__style: {
    fontSize: 80,
  },
};
