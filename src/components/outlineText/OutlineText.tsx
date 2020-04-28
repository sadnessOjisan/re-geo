import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  size: number;
  inlineColor: string;
  outlineColor: string;
  strokeWidth: number;
}

const OutlineText = (props: Props) => {
  const {
    className,
    children,
    size,
    inlineColor,
    outlineColor,
    strokeWidth,
  } = props;
  return (
    <StyledText
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      inlineColor={inlineColor}
      outlineColor={outlineColor}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<Props>`
  color: ${(props: Props) => props.inlineColor};
  font-size: ${(props: Props) => props.size}px;
  -webkit-text-stroke-color: ${(props: Props) => props.outlineColor};
  -webkit-text-stroke-width: ${(props: Props) => props.strokeWidth}px;
`;

export default OutlineText;
