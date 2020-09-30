import React from "react";
import { Story, Meta } from "../../../node_modules/@storybook/react/types-6-0";
import { BackGround as _Background } from "../index";

interface Props {
  /** 背景パターン */
  pattern: "stars" | "microfab" | "rainbow";
}

const Template: Story<Props> = (args: Props) => (
  <div style={{ width: "100vw", height: "100vw" }}>
    <_Background {...args} />
  </div>
);

export const Background = Template.bind({});
Background.args = {
  pattern: "stars",
};

export default {
  title: "Components/Background",
  component: _Background,
} as Meta;
