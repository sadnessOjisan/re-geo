import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./Table";

storiesOf("Table", module).add("alert", () => (
  <Table
    headers={["aaa", "bbb", "ccc"]}
    rows={[["111", "222", "333"], ["fff", "ggg", "hhh"]]}
  />
));
