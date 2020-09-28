import React from "react";
import { Center } from "../index";

export interface Props {
  vertical: boolean;
  horizontal: boolean;
}

export const Vertical: React.FC<Props> = () => {
  return (
    <div style={{ height: 300 }}>
      <Center vertical={true}>speed = 0.1</Center>
    </div>
  );
};

export const Horizontal: React.FC<Props> = () => {
  return <Center horizontal={true}>speed = 0.1</Center>;
};

export const Both: React.FC<Props> = () => {
  return (
    <div style={{ height: 300 }}>
      <Center vertical={true} horizontal={true}>
        speed = 0.1
      </Center>
    </div>
  );
};

export default {
  title: "Components/Center",
};
