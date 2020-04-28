import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tabs from "./Tabs";

const text = `  
### what
blink tag.
`;

storiesOf("Tabs", module).add(
  "default",
  withInfo({
    inline: true,
    text: text,
  })(() => (
    <Tabs
      tabs={[
        { id: "1", name: "tab1", content: "con1" },
        { id: "2", name: "tab2", content: "con2" },
        { id: "3", name: "tab3", content: "con3" },
        { id: "4", name: "tab4", content: "con4" },
      ]}
      selectedId="1"
      onClickTab={(id: string) => {
        console.log(id);
      }}
    />
  ))
);
