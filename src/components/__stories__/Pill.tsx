import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Pill as _Pill } from "../index";
export interface Props {
  isActive?: boolean;
  isDisable?: boolean;
}

const Template: Story<Props> = (args: Props) => (
  <_Pill {...args}>THIS IS Pill COMPONENT.</_Pill>
);

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = { isActive: true };

export const Disable = Template.bind({});
Disable.args = { isDisable: true };

export default {
  title: "Components/Pill",
  component: _Pill,
} as Meta;
