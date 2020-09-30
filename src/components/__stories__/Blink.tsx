import React from "react";
import { Blink } from "../index";

export interface Props {
  type: string;
}

export const Blink01: React.FC<Props> = () => {
  return <Blink speed={0.1}>speed = 0.1</Blink>;
};

export const Blink1: React.FC<Props> = () => {
  return <Blink speed={1}>speed = 1</Blink>;
};

export const Blink2: React.FC<Props> = () => {
  return <Blink speed={2}>speed = 2</Blink>;
};

export default {
  title: "Components/Blink",
};
