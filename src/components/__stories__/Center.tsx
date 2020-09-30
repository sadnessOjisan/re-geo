import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Center as _Center } from "../index";

export interface Props {
  vertical?: boolean;
  horizontal?: boolean;
}

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: "50vw", height: "50vh", backgroundColor: "snow" }}>
    <_Center {...args}>THIS IS CENTER COMPONENT.</_Center>
  </div>
);

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true,
};

export const Both = Template.bind({});
Both.args = {
  vertical: true,
  horizontal: true,
};

export default {
  title: "Components/Center",
  component: _Center,
} as Meta;
