import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Props = { inline?: boolean } & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  return (
    <p
      className={props.__unsafe__className}
      style={{
        display: props.inline ? "inline" : "inherit",
        ...props.__unsafe__style,
      }}
    >
      {props.children}
    </p>
  );
};
