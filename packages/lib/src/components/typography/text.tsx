import { FC } from "react";

import { OLD_FASHION } from "../../const";
import { BLACK } from "../../const/internal/color";

type Props = {
  color?: string;
};

const baseStyle: React.CSSProperties = {
  font: OLD_FASHION,
};

const FONT_SIZE = 16;

export const Text: FC<Props> = ({ children, color }) => {
  return (
    <p style={{ ...baseStyle, fontSize: FONT_SIZE, color: color ?? BLACK }}>
      {children}
    </p>
  );
};
