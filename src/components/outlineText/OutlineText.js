import React from "react";
import styled from "styled-components";

const OutlineText = props => {
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
