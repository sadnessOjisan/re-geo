import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Pill, PillNav as _PillNav } from "../index";
export interface Props {
  isActive?: boolean;
  isDisable?: boolean;
}

const Template: Story<Props> = (args: Props) => (
  <_PillNav {...args}>
    <Pill>nothing</Pill>
    <Pill isActive={true}>isActive</Pill>
    <Pill isDisable={true}>isDisable</Pill>
  </_PillNav>
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: "Components/PillNav",
  component: _PillNav,
} as Meta;
