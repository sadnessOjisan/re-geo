import { css, keyframes } from "@stitches/react";
import { FC } from "react";

type Props = {
  duration: number;
};

const Style = (
  <style>
    {`@keyframes toLeft {
0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}`}
  </style>
);

export const ModernMarquee: FC<Props> = (props) => {
  return (
    <div
      style={{
        height: "50px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {Style}
      <div
        style={{
          transform: "translateX(100%)",
          animationIterationCount: "infinite",
          animationName: "toLeft",
          animationDuration: `${props.duration}s`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
