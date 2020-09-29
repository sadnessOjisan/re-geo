import * as React from "react";
import styled from "styled-components";
import { Stars, Microfab, Rainbow } from "../../img/index";

interface PassedProps {
  pattern: "stars" | "microfab" | "rainbow";
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)<Props>`
  width: 100%;
  height: 100%;
  background: ${(props: Props) => {
    switch (props.pattern) {
      case "stars":
        return `#000 url(${Stars}) top left`;
      case "microfab":
        return `#000 url(${Microfab}) top left`;
      case "rainbow":
        return `#000 url(${Rainbow}) top left`;
      default:
        return "#000";
    }
    1;
  }};
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { pattern, children } = props;
  return <StyledComponent pattern={pattern}>{children}</StyledComponent>;
};

export const BackGround = ContainerComponent;
