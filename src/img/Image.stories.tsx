import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Image from "./";

const text = (name: string) => `  
  ### what
  Image is funny image set.

  There contain so many image paths.

  ### how to use
  ~~~js
  <img src={Image.${name}}>
  ~~~

  ### Caution
  Story Source sample code is wrong. (because its file name is hashed.) 
  
  Please refer to how to use, this section above.

  ### Source
  [here](https://github.com/sadnessOjisan/re-geo/tree/master/src/img)
`;

storiesOf("Image", module)
  .add(
    "SevenUpspot",
    withInfo({
      inline: true,
      text: text("SevenUpspot")
    })(() => <img src={Image.SevenUpspot} />)
  )
  .add(
    "Americanflag",
    withInfo({
      inline: true,
      text: text("Americanflag")
    })(() => <img src={Image.Americanflag} />)
  )
  .add(
    "Community",
    withInfo({
      inline: true,
      text: text("Community")
    })(() => <img src={Image.Community} />)
  )
  .add(
    "Computer01",
    withInfo({
      inline: true,
      text: text("Computer01")
    })(() => <img src={Image.Computer01} />)
  )
  .add(
    "Computer",
    withInfo({
      inline: true,
      text: text("Computer")
    })(() => <img src={Image.Computer} />)
  )
  .add(
    "Construction",
    withInfo({
      inline: true,
      text: text("Construction")
    })(() => <img src={Image.Construction} />)
  )
  .add(
    "Counter",
    withInfo({
      inline: true,
      text: text("Counter")
    })(() => <img src={Image.Counter} />)
  )
  .add(
    "Counter2",
    withInfo({
      inline: true,
      text: text("Counter2")
    })(() => <img src={Image.Counter2} />)
  )
  .add(
    "Divider1",
    withInfo({
      inline: true,
      text: text("Divider1")
    })(() => <img src={Image.Divider1} />)
  )
  .add(
    "Divider2",
    withInfo({
      inline: true,
      text: text("Divider2")
    })(() => <img src={Image.Divider2} />)
  )
  .add(
    "Divider3",
    withInfo({
      inline: true,
      text: text("Divider3")
    })(() => <img src={Image.Divider3} />)
  )
  .add(
    "Divider4",
    withInfo({
      inline: true,
      text: text("Divider4")
    })(() => <img src={Image.Divider4} />)
  )
  .add(
    "Drudgesiren",
    withInfo({
      inline: true,
      text: text("Drudgesiren")
    })(() => <img src={Image.Drudgesiren} />)
  )
  .add(
    "Emailme",
    withInfo({
      inline: true,
      text: text("Emailme")
    })(() => <img src={Image.Emailme} />)
  )
  .add(
    "Flames",
    withInfo({
      inline: true,
      text: text("Flames")
    })(() => <img src={Image.Flames} />)
  )
  .add(
    "Funky",
    withInfo({
      inline: true,
      text: text("Funky")
    })(() => <img src={Image.Funky} />)
  )
  .add(
    "Geocities",
    withInfo({
      inline: true,
      text: text("Geocities")
    })(() => <img src={Image.Geocities} />)
  )
  .add(
    "GlyphiconsHalflingsWhite",
    withInfo({
      inline: true,
      text: text("GlyphiconsHalflingsWhite")
    })(() => <img src={Image.GlyphiconsHalflingsWhite} />)
  )
  .add(
    "GlyphiconsHalflings",
    withInfo({
      inline: true,
      text: text("GlyphiconsHalflings")
    })(() => <img src={Image.GlyphiconsHalflings} />)
  )
  .add(
    "Hacker",
    withInfo({
      inline: true,
      text: text("Hacker")
    })(() => <img src={Image.Hacker} />)
  )
  .add(
    "Heart",
    withInfo({
      inline: true,
      text: text("Heart")
    })(() => <img src={Image.Heart} />)
  )
  .add(
    "Hot",
    withInfo({
      inline: true,
      text: text("Hot")
    })(() => <img src={Image.Hot} />)
  )
  .add(
    "IELogo",
    withInfo({
      inline: true,
      text: text("IELogo")
    })(() => <img src={Image.IELogo} />)
  )
  .add(
    "Mailkitten",
    withInfo({
      inline: true,
      text: text("Mailkitten")
    })(() => <img src={Image.Mailkitten} />)
  )
  .add(
    "Mchammer",
    withInfo({
      inline: true,
      text: text("Mchammer")
    })(() => <img src={Image.Mchammer} />)
  )
  .add(
    "Microfab",
    withInfo({
      inline: true,
      text: text("Microfab")
    })(() => <img src={Image.Microfab} />)
  )
  .add(
    "New",
    withInfo({
      inline: true,
      text: text("New")
    })(() => <img src={Image.New} />)
  )
  .add(
    "New2",
    withInfo({
      inline: true,
      text: text("New2")
    })(() => <img src={Image.New2} />)
  )
  .add(
    "Noframes",
    withInfo({
      inline: true,
      text: text("Noframes")
    })(() => <img src={Image.Noframes} />)
  )
  .add(
    "Notepad",
    withInfo({
      inline: true,
      text: text("Notepad")
    })(() => <img src={Image.Notepad} />)
  )
  .add(
    "Progress",
    withInfo({
      inline: true,
      text: text("Progress")
    })(() => <img src={Image.Progress} />)
  )
  .add(
    "Rrainbow",
    withInfo({
      inline: true,
      text: text("Rrainbow")
    })(() => <img src={Image.Rrainbow} />)
  )
  .add(
    "SignIn",
    withInfo({
      inline: true,
      text: text("SignIn")
    })(() => <img src={Image.SignIn} />)
  )
  .add(
    "Spinningearth",
    withInfo({
      inline: true,
      text: text("Spinningearth")
    })(() => <img src={Image.Spinningearth} />)
  )
  .add(
    "Stars",
    withInfo({
      inline: true,
      text: text("Stars")
    })(() => <img src={Image.Stars} />)
  )
  .add(
    "Underconstruction",
    withInfo({
      inline: true,
      text: text("Underconstruction")
    })(() => <img src={Image.Underconstruction} />)
  )
  .add(
    "Wabwalk",
    withInfo({
      inline: true,
      text: text("Wabwalk")
    })(() => <img src={Image.Wabwalk} />)
  )
  .add(
    "Webtrips",
    withInfo({
      inline: true,
      text: text("Webtrips")
    })(() => <img src={Image.Webtrips} />)
  )
  .add(
    "Yahooweek",
    withInfo({
      inline: true,
      text: text("Yahooweek")
    })(() => <img src={Image.Yahooweek} />)
  );
