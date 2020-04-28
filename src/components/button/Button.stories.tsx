import * as React from "react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
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
    viewport: {
      viewports: INITIAL_VIEWPORTS,
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
