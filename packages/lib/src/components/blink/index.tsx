import { css, keyframes } from "@stitches/react";
import { VFC } from "react";

type Props = {
  text: string;
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
  }),
};

export const Blink: VFC<Props> = (props) => {
  return <div className={styles.wrapper()}>{props.text}</div>;
};
