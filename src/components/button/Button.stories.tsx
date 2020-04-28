import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { withInfo } from "@storybook/addon-info";

const text = `  
  ### what
  Button tag.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/button/Button.tsx)
`;

const stories = storiesOf("Button", module);

stories
  .add(
    "default",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button>HeyHeyHey</Button>)
  )
  .add(
    "primary",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="primary">HeyHeyHey</Button>)
  )
  .add(
    "primary small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="primary" size="small">
        primary
      </Button>
    ))
  )
  .add(
    "primary large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="primary" size="large">
        primary
      </Button>
    ))
  )
  .add(
    "info",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="info">HeyHeyHey</Button>)
  )
  .add(
    "info small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="info" size="small">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "info large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="info" size="large">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "success",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="success">HeyHeyHey</Button>)
  )
  .add(
    "success small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="success" size="small">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "success large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="success" size="large">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "success disable",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="success" isDisable>
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "warning",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="warning">HeyHeyHey</Button>)
  )
  .add(
    "warning small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="warning" size="small">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "warning large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="warning" size="large">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "danger",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="danger">HeyHeyHey</Button>)
  )
  .add(
    "danger small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="danger" size="small">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "danger large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="danger" size="large">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "inverse",
    withInfo({
      inline: true,
      text: text,
    })(() => <Button type="inverse">HeyHeyHey</Button>)
  )
  .add(
    "inverse small",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="inverse" size="small">
        HeyHeyHey
      </Button>
    ))
  )
  .add(
    "inverse large",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Button type="inverse" size="large">
        HeyHeyHey
      </Button>
    ))
  );

storiesOf("Split Button", module).add(
  "inverse large",
  withInfo({
    inline: true,
    text: text,
  })(() => (
    <ButtonGroup>
      <Button type="primary" size="large">
        heyheyhey
      </Button>
      <Button type="inverse" size="large">
        heyheyhey
      </Button>
    </ButtonGroup>
  ))
);
