import * as React from "react";
import styled, { keyframes, css } from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  colorArray: string[];
  isAnimate?: boolean;
  fontSize?: number;
}

const GradationText = (props: Props) => {
  const { className, children, colorArray, isAnimate, fontSize } = props;
  return (
    <StyledText
      className={className}
      colorArray={colorArray}
      isAnimate={isAnimate}
      fontSize={fontSize}
    >
      {children}
    </StyledText>
  );
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

const StyledText = styled.span<Props>`
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

export default GradationText;
