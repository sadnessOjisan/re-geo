import { FC } from "react";

import { Flames, Microfab, Rainbow, Stars } from "../../assets";
import { assertNever } from "../../util/internal/assert-never";

type Props = {
  pattern: "stars" | "microfab" | "rainbow" | "flame";
};

export const Background: FC<Props> = (props) => {
  let backgroundStyle: React.CSSProperties = {};

  switch (props.pattern) {
    case "microfab":
      backgroundStyle = { background: `#000000 url(${Microfab}) top left` };
      break;
    case "stars":
      backgroundStyle = { background: `#000000 url(${Stars}) top left` };
      break;
    case "rainbow":
      backgroundStyle = { background: `#000000 url(${Rainbow}) top left` };
      break;
    case "flame":
      backgroundStyle = { background: `#000000 url(${Flames}) top left` };
      break;
    default:
      assertNever(props.pattern);
  }
  return (
    <div style={{ ...backgroundStyle, width: "100%", height: "100%" }}>
      {props.children}
    </div>
  );
};
