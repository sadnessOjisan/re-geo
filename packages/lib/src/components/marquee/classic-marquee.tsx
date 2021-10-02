import { FC } from "react";

// FYI: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
type Props = {
  behavior?: "scroll" | "slide" | "alternate";
  direction?: "up" | "down" | "left" | "right";
  bgcolor?: string;
  height?: string;
  hspace?: string;
  loop?: string;
  scrollamout?: string;
  scrolldelay?: string;
  truespeed?: string;
  vspace?: string;
  width?: string;
  __unsafe__style?: React.CSSProperties;
  __unsafe__className?: string;
  // TODO: impl event handler
  // onbounce: (e: any) => void;
  // onfinish: (e: any) => void;
  // onstart: (e: any) => void;
};

/**
 * Now marquee is deprecated and tsc raise error if you use native marquee.
 * That's why we provide classic marquee wrapper to avoid compile error in your env.
 */
export const ClassicMarquee: FC<Props> = (props) => {
  return (
    // eslint-disable-next-line
    // @ts-ignore
    <marquee
      behavior={props.behavior}
      direction={props.direction}
      width={props.width}
      height={props.height}
      scrolldelay={props.scrollamout}
      scrollamount={props.scrollamout}
      loop={props.loop}
      bgcolor={props.bgcolor}
      vspace={props.vspace}
      hspace={props.hspace}
      style={props.__unsafe__style}
      className={props.__unsafe__className}
    >
      {props.children}
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
    </marquee>
  );
};
