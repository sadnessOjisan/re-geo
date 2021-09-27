import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Background as Component } from "./index";

export default {
  title: "Background",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const Microfab = Template.bind({});
Microfab.args = {
  pattern: "microfab",
};

export const Stars = Template.bind({});
Stars.args = {
  pattern: "stars",
};

export const Rainbow = Template.bind({});
Rainbow.args = {
  pattern: "rainbow",
};
