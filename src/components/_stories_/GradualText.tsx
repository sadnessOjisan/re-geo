import React from "react";
import { GradationText } from "../index";

export interface Props {
  type: string;
}

export const GradationTextStory: React.FC<Props> = () => {
  return (
    <GradationText colorArray={["red", "yellow", "blue"]}>test</GradationText>
  );
};

export const Animation: React.FC<Props> = () => {
  return (
    <GradationText colorArray={["red", "yellow", "blue"]} isAnimate={true}>
      test
    </GradationText>
  );
};

export default {
  title: "Components/GradationText",
  component: GradationTextStory,
};
