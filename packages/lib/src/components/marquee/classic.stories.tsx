import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { ClassicMarquee as Component } from "./classic-marquee";

export default {
  title: "Marquee(Classic)",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>
    <p>hello world!!</p>
  </Component>
);

export const Default = Template.bind({});
Default.args = {};

export const Slide = Template.bind({});
Slide.args = {
  behavior: "slide",
};

export const Up = Template.bind({});
Up.args = {
  direction: "up",
};
