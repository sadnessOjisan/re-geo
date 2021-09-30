import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Zoom as Component } from "./index";

export default {
  title: "Zoom",
  component: Component,
};

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    }}
  >
    <Component {...args}>
      <p>hello world!!</p>
    </Component>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Rapid = Template.bind({});
Rapid.args = {
  speed: 0.3,
};

export const Slow = Template.bind({});
Slow.args = {
  speed: 10,
};

export const Big = Template.bind({});
Big.args = {
  minRatio: 0.3,
  maxRatio: 10,
};
