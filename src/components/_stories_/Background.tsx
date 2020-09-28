import React from "react";
import { BackGround } from "../index";

export interface Props {
  type: string;
}

export const BackgroundStory: React.FC<Props> = () => {
  return <BackGround pattern="stars">test</BackGround>;
};

export default {
  title: "Components/BackgroundStory",
  component: BackgroundStory,
};
