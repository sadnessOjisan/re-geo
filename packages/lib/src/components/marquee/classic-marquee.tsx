import { FC } from "react";

type Props = {
  behavior?: "scroll" | "slide" | "alternate";
  direction?: "up" | "down" | "left" | "right";
};

export const ClassicMarquee: FC<Props> = (props) => {
  return (
    // eslint-disable-next-line
    // @ts-ignore
    <marquee behavior={props.behavior} direction={props.direction}>
      {props.children}
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
    </marquee>
  );
};
