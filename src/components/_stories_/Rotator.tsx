import React from "react";
import { Rotator } from "../index";

export interface Props {
  rate?: number;
}

export const Default: React.FC<Props> = () => {
  return <Rotator speed={1}>ROTATOR</Rotator>;
};

export const Five: React.FC<Props> = () => {
  return <Rotator speed={5}>ROTATOR</Rotator>;
};

export const Ten: React.FC<Props> = () => {
  return <Rotator speed={10}>ROTATOR</Rotator>;
};

export default {
  title: "Components/Rotator",
};
