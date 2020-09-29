import React from "react";
import { Pill } from "../index";

export interface Props {
  isActive?: boolean;
  isDisable?: boolean;
}

export const Default: React.FC<Props> = () => {
  return <Pill>test</Pill>;
};

export const Active: React.FC<Props> = () => {
  return <Pill isActive={true}>test</Pill>;
};

export const Disable: React.FC<Props> = () => {
  return <Pill isDisable={true}>test</Pill>;
};

export default {
  title: "Components/Pill",
};
