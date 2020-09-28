import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  className?: string;
}

interface PassedProps {
  speed?: number;
}

type StyledProps = Pick<PassedProps, "speed">;

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const Rotate = keyframes`
0% {
  transform: scale(1);
}

100% {
  transform: scale(3);
}
`;

const StyledComponent = styled(Component)<StyledProps>`
  animation: ${Rotate} ${(props) => (props.speed ? props.speed : 5)}s linear
    infinite alternate;
  display: inline-block;
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { speed, children } = props;
  return <StyledComponent speed={speed}>{children}</StyledComponent>;
};

export const Zoom = ContainerComponent;
