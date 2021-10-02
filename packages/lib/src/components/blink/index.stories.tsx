import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Blink as Component } from "./index";

export default {
  title: "Blink",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "hello world",
};

export const SLOW = Template.bind({});
SLOW.args = {
  children: "hello world",
  speed: 3,
};

export const HIGH = Template.bind({});
HIGH.args = {
  children: "hello world",
  speed: 0.15,
};
