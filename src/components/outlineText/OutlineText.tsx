import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  size: number;
  inlineColor: string;
  outlineColor: string;
  strokeWidth: string;
}

const OutlineText = (props: Props) => {
  const {
    className,
    children,
    size,
    inlineColor,
    outlineColor,
    strokeWidth
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

const StyledText = styled.span`
  color: ${props => props.inlineColor};
  font-size: ${props => props.size}px;
  -webkit-text-stroke-color: ${props => props.outlineColor};
  -webkit-text-stroke-width: ${props => props.strokeWidth}px;
`;

export default OutlineText;
