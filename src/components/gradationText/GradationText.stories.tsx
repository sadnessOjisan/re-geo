import React from "react";
import { storiesOf } from "@storybook/react";
import GradationText from "./GradationText";

storiesOf("GradationText", module)
  .add("GradationText", () => (
    <GradationText colorArray={["red", "blue", "green"]}>
      Hello GradationText
    </GradationText>
  ))
  .add("GradationText animation", () => (
    <GradationText colorArray={["red", "blue", "green"]} isAnimate={true}>
      Hello GradationText
    </GradationText>
  ))
  .add("GradationText animation large", () => (
    <GradationText
      fontSize={48}
      colorArray={["red", "blue", "green"]}
      isAnimate={true}
    >
      Hello GradationText
    </GradationText>
  ));
