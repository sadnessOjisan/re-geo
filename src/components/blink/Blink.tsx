import * as React from "react";
import styled, { keyframes } from "styled-components";

interface PassedProps {
  speed?: number;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const Blinker = keyframes`
  0% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
`;

const StyledComponent = styled(Component)<Props>`
  animation: ${Blinker} ${(props: Props) => (props.speed ? props.speed : 0.15)}s
    step-end infinite;
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { children, speed } = props;
  return <StyledComponent speed={speed}>{children}</StyledComponent>;
};

export const Blink = ContainerComponent;
