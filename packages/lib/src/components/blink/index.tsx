import { VFC } from "react";

type Props = {
  text: string;
};
export const Blink: VFC<Props> = (props) => {
  return <div>{props.text}</div>;
};
