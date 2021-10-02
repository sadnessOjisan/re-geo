import { FC } from "react";

type Props = {
  isVertical?: boolean;
  isHorizontal?: boolean;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

export const Center: FC<Props> = (props) => (
  <div
    style={{
      display: "flex",
      alignItems: props.isVertical ? "center" : "inherit",
      justifyContent: props.isHorizontal ? "center" : "inherit",
      ...props.__unsafe__style,
    }}
    className={props.__unsafe__className}
  >
    {props.children}
  </div>
);
