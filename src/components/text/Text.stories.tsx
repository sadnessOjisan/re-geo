import React from "react";
import { storiesOf } from "@storybook/react";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import P from "./P";

storiesOf("Text", module)
  .add("h1", () => <H1>heyyhey</H1>)
  .add("h2", () => <H2>heyyhey</H2>)
  .add("H3", () => <H3>heyyhey</H3>)
  .add("H4", () => <H4>heyyhey</H4>)
  .add("H5", () => <H5>heyyhey</H5>)
  .add("H6", () => <H6>heyyhey</H6>)
  .add("P", () => <P>heyyhey</P>)
  .add("color P", () => <P color="blue">heyyhey</P>);
