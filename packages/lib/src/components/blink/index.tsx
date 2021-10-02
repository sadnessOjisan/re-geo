import { FC } from "react";

type Props = {
  // TODO: Add speed type, because some user feel difficult to set natural number
  speed?: number;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

const DEFAULT_SPEED = 1;

export const Blink: FC<Props> = (props) => {
  return (
    <>
      <style>{`@keyframes blinker {
        0% {
          opacity: 0;
        }
        75%{
          opacity: 1;
        }
      }`}</style>
      <div
        className={props.__unsafe__className}
        style={{
          animation: `blinker ${
            props.speed === undefined ? DEFAULT_SPEED : props.speed
          }s step-end infinite`,
          ...props.__unsafe__style,
        }}
      >
        {props.children}
      </div>
    </>
  );
};
