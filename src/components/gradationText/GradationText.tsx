import * as React from "react";
import styled, { keyframes, css } from "styled-components";

interface PassedProps {
  colorArray: string[];
  isAnimate?: boolean;
  fontSize?: number;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
};

const Move = keyframes`
to {
  background-position: 200% center;
}
`;

const MoveAnimation = () =>
  css`
    ${Move} 1s linear infinite reverse;
  `;

const StyledComponent = styled(Component)<Props>`
  background: -webkit-linear-gradient(
    0deg,
    ${(props: Props) => props.colorArray[0]},
    ${(props: Props) => props.colorArray[1]},
    ${(props: Props) => props.colorArray[2]}
  );
  font-size: ${(props: Props) => (props.fontSize ? props.fontSize : 16)}px;
  -webkit-background-clip: text;
  background-size: 200% auto;
  -webkit-text-fill-color: transparent;
  animation: ${(props: Props) => props.isAnimate && MoveAnimation};
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { colorArray, isAnimate, fontSize, children } = props;
  return (
    <StyledComponent
      colorArray={colorArray}
      isAnimate={isAnimate}
      fontSize={fontSize}
    >
      {children}
    </StyledComponent>
  );
};

export const GradationText = ContainerComponent;
