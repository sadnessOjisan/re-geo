import { css, keyframes } from "@stitches/react";
import { VFC } from "react";

type Props = {
  text: string;
  speed?: "high" | "normal" | "slow";
  style?: React.CSSProperties;
};

const blinker = keyframes({
  "0%": {
    opacity: 0,
  },
  "75%": {
    opacity: 1,
  },
});

const styles = {
  wrapper: css({
    animation: `${blinker} 0.15s step-end infinite`,
    variants: {
      speed: {
        high: {
          animationDuration: "0.05s",
        },
        normal: { animationDuration: "0.15s" },
        slow: { animationDuration: "0.3s" },
      },
    },
  }),
};

export const Blink: VFC<Props> = (props) => {
  return (
    <div className={styles.wrapper({ speed: props.speed })} style={props.style}>
      {props.text}
    </div>
  );
};
