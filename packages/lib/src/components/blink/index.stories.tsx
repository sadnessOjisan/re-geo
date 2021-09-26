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
  text: "blink",
};
