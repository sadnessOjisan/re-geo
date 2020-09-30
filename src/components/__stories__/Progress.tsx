import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { ProgressBar as _ProgressBar } from "../index";
export interface Props {
  rate: number;
}

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: "320px", backgroundColor: "pink", padding: 12 }}>
    <_ProgressBar {...args}>THIS IS ProgressBar COMPONENT.</_ProgressBar>
  </div>
);

export const Default = Template.bind({});
Default.args = { rate: 50 };

export default {
  title: "Components/ProgressBar",
  component: _ProgressBar,
} as Meta;
