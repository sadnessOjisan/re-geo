import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Text as Component } from "./text";

export default {
  title: "Text",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>hello world!!</Component>
);

export const Text = Template.bind({});
Text.args = {};
