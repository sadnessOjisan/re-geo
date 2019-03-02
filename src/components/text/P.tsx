import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  color: string | null;
  fontSize: number;
  className: string;
}

const P = (props: Props) => {
  const { children, color, fontSize, className } = props;
  return (
    <StyledP color={color} fontSize={fontSize} className={className}>
      {children}
    </StyledP>
  );
};

const StyledP = styled.p`
  display: block;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  line-height: 20px;
  color: ${props => (props.color ? props.color : "#ff0")};
`;

export default P;
