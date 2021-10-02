import { FC } from "react";

import { OLD_FASHION } from "../../const";
import { BLACK } from "../../const/internal/color";

type Props = {
  color?: string;
  __unsafe__style?: React.CSSProperties;
};

const baseStyle: React.CSSProperties = {
  fontFamily: OLD_FASHION,
};

const FONT_SIZE = 16;

export const Text: FC<Props> = ({ __unsafe__style, children, color }) => {
  return (
    <p
      style={{
        ...baseStyle,
        fontSize: FONT_SIZE,
        color: color ?? BLACK,
        ...__unsafe__style,
      }}
    >
      {children}
    </p>
  );
};
