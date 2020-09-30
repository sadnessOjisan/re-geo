import React from "react";
import { Pager } from "../index";

export interface Props {
  inlineColor: string;
  outlineColor: string;
  strokeWidth: number;
}

export const Default: React.FC<Props> = () => {
  return <Pager>test</Pager>;
};

export const Disable: React.FC<Props> = () => {
  return <Pager type="disabled">test</Pager>;
};

export default {
  title: "Components/Pager",
};
