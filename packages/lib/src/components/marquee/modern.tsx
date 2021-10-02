import { FC } from "react";

type Props = {
  duration: number;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

export const ModernMarquee: FC<Props> = (props) => {
  return (
    <div
      style={{
        height: "50px",
        overflow: "hidden",
        position: "relative",
        ...props.__unsafe__style,
      }}
      className={props.__unsafe__className}
    >
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
