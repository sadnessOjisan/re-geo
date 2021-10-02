import { FC } from "react";

type Props = {
  isVertical?: boolean;
  isHorizontal?: boolean;
  __unsafe__style?: React.CSSProperties;
};

export const Center: FC<Props> = (props) => (
  <div
    style={{
      display: "flex",
      alignItems: props.isVertical ? "center" : "inherit",
      justifyContent: props.isHorizontal ? "center" : "inherit",
      ...props.__unsafe__style,
    }}
  >
    {props.children}
  </div>
);
