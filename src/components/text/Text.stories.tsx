import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import P from "./P";

const text = `  
### what
blink tag.
`;

storiesOf("Text", module)
  .add(
    "h1",
    withInfo({
      inline: true,
      text: text
    })(() => <H1>heyyhey</H1>)
  )
  .add(
    "h2",
    withInfo({
      inline: true,
      text: text
    })(() => <H2>heyyhey</H2>)
  )
  .add(
    "h3",
    withInfo({
      inline: true,
      text: text
    })(() => <H3>heyyhey</H3>)
  )
  .add(
    "h4",
    withInfo({
      inline: true,
      text: text
    })(() => <H4>heyyhey</H4>)
  )
  .add(
    "h5",
    withInfo({
      inline: true,
      text: text
    })(() => <H5>heyyhey</H5>)
  )
  .add(
    "h6",
    withInfo({
      inline: true,
      text: text
    })(() => <H6>heyyhey</H6>)
  )
  .add(
    "p",
    withInfo({
      inline: true,
      text: text
    })(() => <P>heyyhey</P>)
  )
  .add(
    "color",
    withInfo({
      inline: true,
      text: text
    })(() => <P color="red">heyyhey</P>)
  );
