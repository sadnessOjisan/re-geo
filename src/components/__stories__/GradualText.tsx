import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { GradationText as _GradationText } from "../index";

export interface Props {
  colorArray: string[];
  isAnimate?: boolean;
  fontSize?: number;
}

const Template: Story<Props> = (args: Props) => (
  <_GradationText {...args}>THIS IS GradationText COMPONENT.</_GradationText>
);

export const Default = Template.bind({});
Default.args = {
  colorArray: ["red", "blue", "yellow"],
};

export const Animation = Template.bind({});
Animation.args = {
  colorArray: ["red", "blue", "yellow"],
  isAnimate: true,
};

export const BigAnimation = Template.bind({});
BigAnimation.args = {
  colorArray: ["red", "blue", "yellow"],
  isAnimate: true,
  fontSize: 48,
};

export default {
  title: "Components/GradationText",
  component: _GradationText,
} as Meta;
