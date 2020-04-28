import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { withInfo } from "@storybook/addon-info";
import { action, actions, withActions } from "@storybook/addon-actions";

const text = `  
  ### what
  Button tag.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/button/Button.tsx)
`;

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: {
      inline: true,
    },
  },
  decorators: [withInfo],
};

export const Action = () => (
  <Button type="danger" size="large" onClick={action("clicked")}>
    HeyHeyHey
  </Button>
);

Action.story = {
  name: "Blink",
};
