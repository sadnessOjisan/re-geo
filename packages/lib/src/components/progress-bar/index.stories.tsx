import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { ProgressBar as Component } from "./index";

export default {
  title: "Progress bar",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const Max = Template.bind({});
Max.args = {
  rate: 100,
};

export const Half = Template.bind({});
Half.args = {
  rate: 50,
};

export const Zero = Template.bind({});
Zero.args = {
  rate: 0,
};
