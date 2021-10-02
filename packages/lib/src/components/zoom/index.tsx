import { FC } from "react";

type Props = {
  // TODO: want to add animation type props
  speed?: number;
  maxRatio?: number;
  minRatio?: number;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

const DEFAULT_SPEED = 1;
const DEFAULT_MIN_RATIO = 1;
const DEFAULT_MAX_RATIO = 3;

export const Zoom: FC<Props> = ({
  children,
  speed,
  maxRatio,
  minRatio,
  __unsafe__className,
  __unsafe__style,
}) => {
  return (
    <>
      <style>{`@keyframes zoom {
          0% {
            transform: scale(${minRatio ?? DEFAULT_MIN_RATIO});
          }
          100% {
            transform: scale(${maxRatio ?? DEFAULT_MAX_RATIO});
          }
      }`}</style>
      <div
        style={{
          animation: `zoom ${
            speed ?? DEFAULT_SPEED
          }s linear infinite alternate`,
          display: "inline-block",
          ...__unsafe__style,
        }}
        className={__unsafe__className}
      >
        {children}
      </div>
    </>
  );
};
