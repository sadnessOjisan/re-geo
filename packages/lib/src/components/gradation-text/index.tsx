import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Gradation = {
  color: string;
  point: `${string}%`;
};

type Props = { inline?: boolean; colors: Gradation[] } & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  const gradations = props.colors.map(
    (color) => `${color.color} ${color.point}`
  );
  const gradation = `linear-gradient(
        90deg,${gradations.join(",")}
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
