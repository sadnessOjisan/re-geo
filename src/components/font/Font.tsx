import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  size?: number;
}

const Font = (props: Props) => {
  const { className, children, color, size } = props;
  return (
    <StyledText className={className} color={color} size={size}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  display: flex;
  color: ${(props: Props) => (props.color ? props.color : "black")};
  font-size: ${(props: Props) => (props.size ? props.size : 16)}px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default Font;
