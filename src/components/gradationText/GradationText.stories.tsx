import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import GradationText from "./GradationText";

const text = `  
### what
gradation text tag.

### cation
under v1.0.0, colorArray needs length 3 array.
`;

storiesOf("GradationText", module)
  .add(
    "GradationText",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <GradationText colorArray={["red", "blue", "green"]}>
        Hello GradationText
      </GradationText>
    ))
  )
  .add(
    "GradationText animation",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <GradationText colorArray={["red", "blue", "green"]} isAnimate={true}>
        Hello GradationText
      </GradationText>
    ))
  )
  .add(
    "GradationText animation　large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <GradationText
        colorArray={["red", "blue", "green"]}
        isAnimate={true}
        fontSize={48}
      >
        Hello GradationText
      </GradationText>
    ))
  );
