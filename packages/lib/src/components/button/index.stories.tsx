import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Button as Component } from "./index";

export default {
  title: "Button",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>hello world!!</Component>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
