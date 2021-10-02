import { VFC } from "react";

import { Progress } from "../../assets";

type Props = {
  rate: number;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
};

export const ProgressBar: VFC<Props> = (props) => {
  return (
    <div
      className={props.__unsafe__className}
      style={{
        background: `#c0c0c0 url(${Progress}) top left repeat-x`,
        border: `1px solid #fff`,
        borderTop: `1px solid #808080`,
        borderLeft: `1px solid #808080`,
        height: 20,
        width: `${props.rate}%`,
        ...props.__unsafe__style,
      }}
    ></div>
  );
};
