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

const StyledText = styled.span<Props>`
  display: flex;
  color: ${(props: Props) => (props.color ? props.color : "black")};
  font-size: ${(props: Props) => (props.size ? props.size : 16)}px;
`;

export default Font;
