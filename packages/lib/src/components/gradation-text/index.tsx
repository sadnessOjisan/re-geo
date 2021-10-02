import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Props = { inline?: boolean; colors: string[] } & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  const gradation = `linear-gradient(
        90deg,${props.colors.join(",")}
      )`;

  return (
    <p
      className={props.__unsafe__className}
      style={{
        display: props.inline ? "inline" : "inherit",
        backgroundImage: gradation,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        ...props.__unsafe__style,
      }}
    >
      {props.children}
    </p>
  );
};
