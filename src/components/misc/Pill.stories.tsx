import React from "react";
import { storiesOf } from "@storybook/react";
import Pill from "./Pill";
import PillNav from "./PillNav";

storiesOf("Pill", module).add("default", () => (
  <PillNav>
    <Pill>default</Pill>
    <Pill isActive={true}>active</Pill>
    <Pill isDisable={true}>diasable</Pill>
  </PillNav>
));
