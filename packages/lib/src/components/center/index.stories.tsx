import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Center as Component } from "./index";

export default {
  title: "Center",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <p>hello world!!</p>,
  isHorizontal: true,
  isVertical: true,
};

export const OnlyHorizontal = Template.bind({});
OnlyHorizontal.args = {
  children: <p>hello world!!</p>,
  isHorizontal: true,
};

export const OnlyVertical = Template.bind({});
OnlyVertical.args = {
  children: <p>hello world!!</p>,
  isVertical: true,
};
