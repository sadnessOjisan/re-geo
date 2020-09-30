import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Pager as _Pager } from "../index";

export interface Props {
  type?: "disabled";
}

const Template: Story<Props> = (args: Props) => (
  <_Pager {...args}>THIS IS Pager COMPONENT.</_Pager>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { type: "disabled" };

export default {
  title: "Components/Pager",
  component: _Pager,
} as Meta;
