import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Zoom as _Zoom } from "../index";
export interface Props {
  speed?: number;
}

const Template: Story<Props> = (args: Props) => (
  <_Zoom {...args}>THIS IS Zoom COMPONENT.</_Zoom>
);

export const Default = Template.bind({});
Default.args = { speed: 0.5 };

export default {
  title: "Components/Zoom",
  component: _Zoom,
} as Meta;
