import React from "react";
import { Zoom } from "../index";

export interface Props {
  rate?: number;
}

export const Default: React.FC<Props> = () => {
  return <Zoom speed={1}>Zoom</Zoom>;
};

export const Five: React.FC<Props> = () => {
  return <Zoom speed={5}>Zoom</Zoom>;
};

export const Ten: React.FC<Props> = () => {
  return <Zoom speed={10}>Zoom</Zoom>;
};

export default {
  title: "Components/Zoom",
};
