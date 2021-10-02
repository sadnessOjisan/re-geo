import { FC } from "react";

import { BaseComponentType } from "../../util/internal/base-component-type";

type Gradation = {
  color: string;
  point: `${string}%`;
};

type Props = {
  inline?: boolean;
  colors: Gradation[];
  isAnimation?: boolean;
} & BaseComponentType;
export const GradationText: FC<Props> = (props) => {
  const gradations = props.colors.map(
    (color) => `${color.color} ${color.point}`
  );
  const gradation = `linear-gradient(
        90deg,${gradations.join(",")}
      )`;

  return (
    <>
      {props.isAnimation && (
        <style>
          {`@keyframes move {
            to {
              background-position: 200% center;
            }
        }`}
        </style>
      )}
      <p
        className={props.__unsafe__className}
        style={{
          display: props.inline ? "inline" : "inherit",
          background: gradation,
          WebkitBackgroundClip: "text",
          backgroundSize: `200% auto`,
          backgroundClip: "text",
          color: "transparent",
          animation: props.isAnimation
            ? `move 1s linear infinite reverse`
            : "inherit",
          ...props.__unsafe__style,
        }}
      >
        {props.children}
      </p>
    </>
  );
};
