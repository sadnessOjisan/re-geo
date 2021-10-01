import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Rotator as Component } from "./index";

export default {
  title: "Rotate",
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
    <Component {...args}></Component>
  </div>
);

export const Default = Template.bind({});
Default.args = { children: <div>custom jsx</div> };

export const Rapid = Template.bind({});
Rapid.args = {
  speed: 0.3,
  children: <div>custom jsx</div>,
};

export const Slow = Template.bind({});
Slow.args = {
  speed: 10,
  children: <div>custom jsx</div>,
};
