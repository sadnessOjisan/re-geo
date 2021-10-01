import { VFC } from "react";

type Props = {
  colors: string[];
  isAnimation?: boolean;
  __unsafe__style?: React.CSSProperties;
};

/**
 *
 * @param props
 * @returns
 * @deprecated
 */
export const GradationText: VFC<Props> = (props) => {
  const backgroundColors = `-webkit-linear-gradient(90deg,${props.colors.join(
    ","
  )})`;
  return (
    <p
      style={{
        background: backgroundColors,
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
      }}
    >
      hellooooooooooooooooooo
    </p>
  );
};
