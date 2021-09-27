import { css } from "@stitches/react";
import { VFC } from "react";

import { Microfab, Rainbow,Stars } from "../../assets";

type Props = {
  pattern: "stars" | "microfab" | "rainbow";
};

const styles = {
  wrapper: css({
    variants: {
      pattern: {
        stars: {
          background: `#000000 url(${Stars}) top left`,
        },
        microfab: {
          background: `#000000 url(${Microfab}) top left`,
        },
        rainbow: {
          background: `#000000 url(${Rainbow}) top left`,
        },
      },
    },
  }),
};

export const Background: VFC<Props> = (props) => {
  return <div className={styles.wrapper({ pattern: props.pattern })}></div>;
};
