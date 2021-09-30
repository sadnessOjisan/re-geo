import { FC } from "react";

type Props = {
  // TODO: want to add animation type props
  speed?: number;
  maxRatio?: number;
  minRatio?: number;
};

const DEFAULT_SPEED = 1;
const DEFAULT_MIN_RATIO = 1;
const DEFAULT_MAX_RATIO = 3;

export const Zoom: FC<Props> = ({ children, speed, maxRatio, minRatio }) => {
  return (
    <>
      <style>{`@keyframes rotate {
          0% {
            transform: scale(${minRatio ?? DEFAULT_MIN_RATIO});
          }
          100% {
            transform: scale(${maxRatio ?? DEFAULT_MAX_RATIO});
          }
      }`}</style>
      <div
        style={{
          animation: `rotate ${
            speed ?? DEFAULT_SPEED
          }s linear infinite alternate`,
          display: "inline-block",
        }}
      >
        {children}
      </div>
    </>
  );
};
