import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { GradationText as Component } from "./index";

export default {
  title: "Gradation Text",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const TwoColor = Template.bind({});
TwoColor.args = {
  colors: ["red", "blue"],
};
