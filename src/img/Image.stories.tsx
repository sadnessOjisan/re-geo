import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Image from "./";

const text = `  
### what
blink tag.
`;

storiesOf("Image", module)
  .add(
    "SevenUpspot",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.SevenUpspot} />)
  )
  .add(
    "Americanflag",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Americanflag} />)
  )
  .add(
    "Community",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Community} />)
  )
  .add(
    "Computer01",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Computer01} />)
  )
  .add(
    "Computer",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Computer} />)
  )
  .add(
    "Construction",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Construction} />)
  )
  .add(
    "Counter",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Counter} />)
  )
  .add(
    "Counter2",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Counter2} />)
  )
  .add(
    "Divider1",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Divider1} />)
  )
  .add(
    "Divider2",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Divider2} />)
  )
  .add(
    "Divider3",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Divider3} />)
  )
  .add(
    "Divider4",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Divider4} />)
  )
  .add(
    "Drudgesiren",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Drudgesiren} />)
  )
  .add(
    "Emailme",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Emailme} />)
  )
  .add(
    "Flames",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Flames} />)
  )
  .add(
    "Funky",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Funky} />)
  )
  .add(
    "Geocities",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Geocities} />)
  )
  .add(
    "GlyphiconsHalflingsWhite",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.GlyphiconsHalflingsWhite} />)
  )
  .add(
    "GlyphiconsHalflings",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.GlyphiconsHalflings} />)
  )
  .add(
    "Hacker",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Hacker} />)
  )
  .add(
    "Heart",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Heart} />)
  )
  .add(
    "Hot",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Hot} />)
  )
  .add(
    "IELogo",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.IELogo} />)
  )
  .add(
    "Mailkitten",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Mailkitten} />)
  )
  .add(
    "Mchammer",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Mchammer} />)
  )
  .add(
    "Microfab",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Microfab} />)
  )
  .add(
    "New",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.New} />)
  )
  .add(
    "New2",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.New2} />)
  )
  .add(
    "Noframes",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Noframes} />)
  )
  .add(
    "Notepad",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Notepad} />)
  )
  .add(
    "Progress",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Progress} />)
  )
  .add(
    "Rrainbow",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Rrainbow} />)
  )
  .add(
    "SignIn",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.SignIn} />)
  )
  .add(
    "Spinningearth",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Spinningearth} />)
  )
  .add(
    "Stars",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Stars} />)
  )
  .add(
    "Underconstruction",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Underconstruction} />)
  )
  .add(
    "Wabwalk",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Wabwalk} />)
  )
  .add(
    "Webtrips",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Webtrips} />)
  )
  .add(
    "Yahooweek",
    withInfo({
      inline: true,
      text: text
    })(() => <img src={Image.Yahooweek} />)
  );
