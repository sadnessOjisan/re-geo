import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Rotator as _Rotator } from "../index";
export interface Props {
  speed?: number;
}

const Template: Story<Props> = (args: Props) => (
  <_Rotator {...args}>THIS IS Rotator COMPONENT.</_Rotator>
);

export const Default = Template.bind({});
Default.args = { speed: 50 };

export default {
  title: "Components/Rotator",
  component: _Rotator,
} as Meta;
