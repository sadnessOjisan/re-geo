import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { withInfo } from "@storybook/addon-info";

const text = `  
### what
button tag. 
`;

const stories = storiesOf("Button", module);

stories
  .add(
    "default",
    withInfo({
      inline: true,
      text: text
    })(() => <Button>HeyHeyHey</Button>)
  )
  .add(
    "primary",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="primary">fiowehjfowehf</Button>)
  )
  .add(
    "primary small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="primary" size="small">
        これはprimary
      </Button>
    ))
  )
  .add(
    "primary large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="primary" size="large">
        これはprimary
      </Button>
    ))
  )
  .add(
    "info",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="info">fiowehjfowehf</Button>)
  )
  .add(
    "info small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="info" size="small">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "info large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="info" size="large">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "success",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="success">fiowehjfowehf</Button>)
  )
  .add(
    "success small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="success" size="small">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "success large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="success" size="large">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "success disable",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="success" isDisable>
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "warning",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="warning">fiowehjfowehf</Button>)
  )
  .add(
    "warning small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="warning" size="small">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "warning large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="warning" size="large">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "danger",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="danger">fiowehjfowehf</Button>)
  )
  .add(
    "danger small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="danger" size="small">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "danger large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="danger" size="large">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "inverse",
    withInfo({
      inline: true,
      text: text
    })(() => <Button type="inverse">fiowehjfowehf</Button>)
  )
  .add(
    "inverse small",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="inverse" size="small">
        fiowehjfowehf
      </Button>
    ))
  )
  .add(
    "inverse large",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Button type="inverse" size="large">
        fiowehjfowehf
      </Button>
    ))
  );

storiesOf("Split Button", module).add(
  "inverse large",
  withInfo({
    inline: true,
    text: text
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
