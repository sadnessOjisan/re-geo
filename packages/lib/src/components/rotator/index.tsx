import { FC } from "react";

type Props = {
  speed?: number;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

const DEFAULT_SPEED = 1;

export const Rotator: FC<Props> = (props) => {
  return (
    <>
      <style>{`@keyframes rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
      }`}</style>
      <div
        style={{
          animation: `rotate ${props.speed ?? DEFAULT_SPEED}s linear infinite`,
          display: "inline-block",
          ...props.__unsafe__style,
        }}
        className={props.__unsafe__className}
      >
        {props.children}
      </div>
    </>
  );
};
