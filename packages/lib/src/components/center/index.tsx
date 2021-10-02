import { FC } from "react";

type Props = {
  isVertical?: boolean;
  isHorizontal?: boolean;
};

export const Center: FC<Props> = (props) => (
  <div
    style={{
      display: "flex",
      alignItems: props.isVertical ? "center" : "inherit",
      justifyContent: props.isHorizontal ? "center" : "inherit",
    }}
  >
    {props.children}
  </div>
);
