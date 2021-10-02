import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { GradationText as Component } from "./index";

export default {
  title: "Text",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>hello world!!</Component>
);

export const ThreeCorlor = Template.bind({});
ThreeCorlor.args = {
  colors: ["#ff0", "#0ff", "#f00"],
};
