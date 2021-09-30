import { css } from "@stitches/react";
import { VFC } from "react";

import { Progress } from "../../assets";

type Props = {
  rate: number;
};

const styles = {
  bar: css({
    background: `#c0c0c0 url(${Progress}) top left repeat-x !important`,
    border: `1px solid #fff`,
    borderTop: `1px solid #808080`,
    borderLeft: `1px solid #808080`,
    height: 20,
  }),
};

export const ProgressBar: VFC<Props> = (props) => {
  return (
    <div className={styles.bar()} style={{ width: `${props.rate}%` }}></div>
  );
};
