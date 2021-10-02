import { FC } from "react";

import { OLD_FASHION } from "../../const";
import {
  BLUE,
  CYAN,
  GREEN,
  RED,
  YELLOW,
  YELLOW_DARK,
} from "../../const/internal/color";
import { assertNever } from "../../util/internal/assert-never";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  __unsafe__style?: React.CSSProperties;
};

const baseStyle: React.CSSProperties = {
  fontFamily: OLD_FASHION,
};

const H1_FONT_SIZE = 44;
const H2_FONT_SIZE = 36;
const H3_FONT_SIZE = 28;
const H4_FONT_SIZE = 20;
const H5_FONT_SIZE = 16;
const H6_FONT_SIZE = 16;

export const Headline: FC<Props> = ({ level, children, __unsafe__style }) => {
  switch (level) {
    case 1:
      return (
        <h1
          style={{
            ...baseStyle,
            fontSize: H1_FONT_SIZE,
            color: RED,
            ...__unsafe__style,
          }}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          style={{
            ...baseStyle,
            fontSize: H2_FONT_SIZE,
            color: YELLOW,
            ...__unsafe__style,
          }}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          style={{
            ...baseStyle,
            fontSize: H3_FONT_SIZE,
            color: GREEN,
            ...__unsafe__style,
          }}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          style={{
            ...baseStyle,
            fontSize: H4_FONT_SIZE,
            color: CYAN,
            ...__unsafe__style,
          }}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          style={{
            ...baseStyle,
            fontSize: H5_FONT_SIZE,
            color: YELLOW_DARK,
            ...__unsafe__style,
          }}
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          style={{
            ...baseStyle,
            fontSize: H6_FONT_SIZE,
            color: BLUE,
            ...__unsafe__style,
          }}
        >
          {children}
        </h6>
      );
    default:
      assertNever(level);
      throw new Error("unreachable line");
  }
};
