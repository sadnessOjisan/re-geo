import React from "react";
import { storiesOf } from "@storybook/react";
import Pager from "./Pager";

storiesOf("Pager", module)
  .add("default", () => <Pager>default</Pager>)
  .add("disabled", () => <Pager type="disabled">disabled</Pager>);
