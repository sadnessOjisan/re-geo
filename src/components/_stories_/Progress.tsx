import React from "react";
import { ProgressBar } from "../index";

export interface Props {
  rate?: number;
}

export const Default: React.FC<Props> = () => {
  return (
    <div style={{ width: 300 }}>
      <ProgressBar rate={50}></ProgressBar>
    </div>
  );
};

export const Full: React.FC<Props> = () => {
  return (
    <div style={{ width: 300 }}>
      <ProgressBar rate={100}></ProgressBar>
    </div>
  );
};

export const Empty: React.FC<Props> = () => {
  return (
    <div style={{ width: 300 }}>
      <ProgressBar rate={0}></ProgressBar>
    </div>
  );
};

export default {
  title: "Components/ProgressBar",
};
