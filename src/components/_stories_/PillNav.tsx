import React from "react";
import { Pill, PillNav } from "../index";

export interface Props {
  isActive?: boolean;
  isDisable?: boolean;
}

export const Default: React.FC<Props> = () => {
  return (
    <PillNav>
      <Pill>test</Pill>
      <Pill isActive={true}>test</Pill>
      <Pill>test</Pill>
    </PillNav>
  );
};

export default {
  title: "Components/PillNav",
};
