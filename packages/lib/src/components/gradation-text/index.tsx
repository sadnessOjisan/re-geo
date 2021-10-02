import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Props = { inline?: boolean; colors: string[] } & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  const gradation = `-webkit-linear-gradient(
        0deg,${props.colors.join(",")}
      );`;
  return (
    <p
      className={props.__unsafe__className}
      style={{
        display: props.inline ? "inline" : "inherit",
        background: gradation,
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...props.__unsafe__style,
      }}
    >
      {props.children}
    </p>
  );
};
