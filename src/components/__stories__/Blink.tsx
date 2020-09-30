import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Blink as _Blink } from "../index";

export interface Props {
  speed?: number;
}

const Template: Story<Props> = (args: Props) => <_Blink {...args}>test</_Blink>;

export const Blink = Template.bind({});
Blink.args = {
  speed: 0.5,
};

export default {
  title: "Components/Blink",
  component: _Blink,
} as Meta;
