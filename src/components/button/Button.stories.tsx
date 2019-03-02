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
  .add("info large", () => (
    <Button type="info" size="large">
      fiowehjfowehf
    </Button>
  ))
  .add("success", () => <Button type="success">fiowehjfowehf</Button>)
  .add("success small", () => (
    <Button type="success" size="small">
      fiowehjfowehf
    </Button>
  ))
  .add("success large", () => (
    <Button type="success" size="large">
      fiowehjfowehf
    </Button>
  ))
  .add("success disable", () => (
    <Button type="success" isDisable>
      fiowehjfowehf
    </Button>
  ))
  .add("warning", () => <Button type="warning">fiowehjfowehf</Button>)
  .add("warning small", () => (
    <Button type="warning" size="small">
      fiowehjfowehf
    </Button>
  ))
  .add("warning large", () => (
    <Button type="warning" size="large">
      fiowehjfowehf
    </Button>
  ))
  .add("danger", () => <Button type="danger">fiowehjfowehf</Button>)
  .add("danger small", () => (
    <Button type="danger" size="small">
      fiowehjfowehf
    </Button>
  ))
  .add("danger large", () => (
    <Button type="danger" size="large">
      fiowehjfowehf
    </Button>
  ))
  .add("inverse", () => <Button type="inverse">fiowehjfowehf</Button>)
  .add("inverse small", () => (
    <Button type="inverse" size="small">
      fiowehjfowehf
    </Button>
  ))
  .add("inverse large", () => (
    <Button type="inverse" size="large">
      fiowehjfowehf
    </Button>
  ));

storiesOf("Split Button", module).add("default", () => (
  <ButtonGroup>
    <Button type="primary" size="large">
      heyheyhey
    </Button>
    <Button type="inverse" size="large">
      heyheyhey
    </Button>
  </ButtonGroup>
));
