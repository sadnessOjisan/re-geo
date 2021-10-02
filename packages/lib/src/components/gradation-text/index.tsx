import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Props = { inline?: boolean; colors: string[] } & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  const gradation = `linear-gradient(
        90deg,${props.colors.join(",")}
      )`;

  return (
    <p
      key={gradation}
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
      {gradation}
      <br />
      linear-gradient( 90deg,#2e4f8b 0%,#3e589d 35%,#8f619b 60%,#d0718f 70%)
    </p>
  );
};
