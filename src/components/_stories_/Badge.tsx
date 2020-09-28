import React from "react";
import { Badge } from "../index";

export interface Props {
  type: string;
}

export const BadgeStory: React.FC<Props> = () => {
  return <Badge type="success">test</Badge>;
};

export default {
  title: "Components/BadgeStory",
  component: BadgeStory,
};
