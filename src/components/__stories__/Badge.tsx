import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Badge as _Badge } from "../index";

export interface Props {
  type?: "success" | "warning" | "important" | "info" | "inverse";
}

const Template: Story<Props> = (args: Props) => <_Badge {...args}>test</_Badge>;

export const Badge = Template.bind({});
Badge.args = {
  type: "success",
};

export default {
  title: "Components/Badge",
  component: _Badge,
} as Meta;
