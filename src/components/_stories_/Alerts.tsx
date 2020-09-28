import React from "react";
import { Alerts } from "../index";

export interface Props {
  type: string;
}

export const AlertsStory: React.FC<Props> = () => {
  return <Alerts type="success">test</Alerts>;
};

export default {
  title: "Components/AlertsStory",
  component: AlertsStory,
};
