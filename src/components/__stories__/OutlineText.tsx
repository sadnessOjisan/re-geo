import React from "react";
import { OutlineText } from "../index";

export interface Props {
  inlineColor: string;
  outlineColor: string;
  strokeWidth: number;
}

export const OutlineTextStory: React.FC<Props> = () => {
  return (
    <OutlineText inlineColor="red" outlineColor="blue" strokeWidth={1}>
      test
    </OutlineText>
  );
};

export default {
  title: "Components/OutlineText",
  component: OutlineTextStory,
};
