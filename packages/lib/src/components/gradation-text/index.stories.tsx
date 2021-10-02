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
      color: "#ff0",
      point: "0%",
    },
    {
      color: "#0ff",
      point: "35%",
    },
    {
      color: "#f00",
      point: "70%",
    },
  ],
};
