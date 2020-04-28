import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Font from "./Font";

const text = `  
  ### what
  Font tag.

  ### why I need
  font tag is deprecated in html5. 

  this tag was used in geo cities web site. 

  And, I wanna revive in html5.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/font/Font.tsx)
`;

storiesOf("Font", module)
  .add(
    "normal",
    withInfo({
      inline: true,
      text: text,
    })(() => <Font>Hello Font</Font>)
  )
  .add(
    "red",
    withInfo({
      inline: true,
      text: text,
    })(() => <Font color="red">Hello Font</Font>)
  )
  .add(
    "large",
    withInfo({
      inline: true,
      text: text,
    })(() => <Font size={99}>Hello Font</Font>)
  )
  .add(
    "large blue",
    withInfo({
      inline: true,
      text: text,
    })(() => (
      <Font size={99} color="blue">
        Hello Font
      </Font>
    ))
  );
