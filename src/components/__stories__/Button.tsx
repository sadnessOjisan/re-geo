import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { Button as _Button } from "../index";

export interface Props {
  type:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "inverse";
  size?: "normal" | "large" | "small";
  isDisable?: boolean;
  onClick?: () => void;
}

const Template: Story<Props> = (args: Props) => (
  <_Button {...args}>test</_Button>
);

export const Type = Template.bind({});
Type.args = {
  type: "default",
};

export const Size = Template.bind({});
Size.args = {
  size: "normal",
};

export const Disable = Template.bind({});
Disable.args = { type: "primary", isDisable: true };

export default {
  title: "Components/Button",
  component: _Button,
} as Meta;
