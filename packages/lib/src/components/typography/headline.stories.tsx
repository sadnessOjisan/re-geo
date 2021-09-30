import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Headline as Component } from "./headline";

export default {
  title: "Heading",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>hello world!!</Component>
);

export const H1 = Template.bind({});
H1.args = {
  level: 1,
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
};
