import * as React from "react";
import styled from "styled-components";
import Image from "../../img/index";

interface Props {
  children?: React.ReactNode;
  className?: string;
  pattern: "stars" | "microfab" | "rainbow";
}

const BackGround = (props: Props) => {
  const { children, pattern, className } = props;
  return (
    <SBackGround pattern={pattern} className={className}>
      {children}
    </SBackGround>
  );
};

const SBackGround = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: ${(props: Props) => {
    switch (props.pattern) {
      case "stars":
        return `#000 url(${Image.Stars}) top left`;
      case "microfab":
        return `#000 url(${Image.Microfab}) top left`;
      case "rainbow":
        return `#000 url(${Image.Rrainbow}) top left`;
      default:
        return "#000";
    }
    1;
  }};
`;

export default BackGround;
