import { FC } from "react";

import { BLACK } from "../../const/internal/color";
import { OLD_FASHION } from "../../const/internal/font";

type Props = {
  color?: string;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

const baseStyle: React.CSSProperties = {
  fontFamily: OLD_FASHION,
};

const FONT_SIZE = 16;

export const Text: FC<Props> = ({
  __unsafe__style,
  children,
  color,
  __unsafe__className,
}) => {
  return (
    <p
      style={{
        ...baseStyle,
        fontSize: FONT_SIZE,
        color: color ?? BLACK,
        ...__unsafe__style,
      }}
      className={__unsafe__className}
    >
      {children}
    </p>
  );
};
