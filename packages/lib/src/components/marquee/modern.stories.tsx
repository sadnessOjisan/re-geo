import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { ModernMarquee as Component } from "./modern";

export default {
  title: "Marquee",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <Component {...args}>
    <p>hello world!!</p>
  </Component>
);

export const FiveSec = Template.bind({});
FiveSec.args = {
  duration: 5,
};

export const FifteenSec = Template.bind({});
FifteenSec.args = {
  duration: 15,
};
