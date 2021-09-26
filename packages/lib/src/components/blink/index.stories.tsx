import { ComponentProps, ComponentType, ReactPropTypes } from "react";
import { Blink as Component } from "./index";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Blink",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "blink",
};
