import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Table from "./Table";

const text = `  
### what
blink tag.
`;

storiesOf("Table", module).add(
  "alert",
  withInfo({
    inline: true,
    text: text
  })(() => (
    <Table
      headers={["aaa", "bbb", "ccc"]}
      rows={[["111", "222", "333"], ["fff", "ggg", "hhh"]]}
    />
  ))
);
