import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Marquee from "./Marquee";

const text = `  
  ### what
  Marquee tag.

  ### Note
  if maqruee hightn is in short, you can set height property, just like 'height="24px"'. Then you should string instead of number.

  ### Why I Need
  Marquee tag is deprecated in html5. 

  this tag was used in geo cities web site. 

  And, I wanna revive in html5.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/blob/master/src/components/center/Center.tsx)
`;

storiesOf("Marquee", module)
  .add(
    "move",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee>😀 😎 👍 💯</Marquee>)
  )
  .add(
    "right",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee direction="right">😀 😎 👍 💯</Marquee>)
  )
  .add(
    "up",
    withInfo({
      inline: true,
      text: text
    })(() => (
      <Marquee height="300px" direction="up">
        😀 😎 👍 💯
      </Marquee>
    ))
  )
  .add(
    "alternate",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee behavior="alternate">😀 😎 👍 💯</Marquee>)
  )
  .add(
    "speedy",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee scrollamount={30}>😀 😎 👍 💯</Marquee>)
  )
  .add(
    "with height",
    withInfo({
      inline: true,
      text: text
    })(() => <Marquee height="26px">😀 😎 👍 💯</Marquee>)
  );
