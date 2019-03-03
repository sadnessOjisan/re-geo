import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  className?: string;
}

const P = (props: Props) => {
  const { children, color, fontSize, className } = props;
  return (
    <StyledP color={color} fontSize={fontSize} className={className}>
      {children}
    </StyledP>
  );
};

const StyledP = styled.p<Props>`
  display: block;
  font-size: ${(props: Props) => (props.fontSize ? props.fontSize : "16px")};
  line-height: 20px;
  color: ${(props: Props) => (props.color ? props.color : "#ff0")};
`;

export default P;
