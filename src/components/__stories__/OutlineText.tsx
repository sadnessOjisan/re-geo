import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { OutlineText as _OutlineText } from "../index";

export interface Props {
  inlineColor: string;
  outlineColor: string;
  strokeWidth: number;
}

const Template: Story<Props> = (args: Props) => (
  <_OutlineText {...args}>THIS IS OutlineText COMPONENT.</_OutlineText>
);

export const Default = Template.bind({});
Default.args = {
  inlineColor: "red",
  outlineColor: "blue",
  strokeWidth: 1,
};

export default {
  title: "Components/OutlineText",
  component: _OutlineText,
} as Meta;
