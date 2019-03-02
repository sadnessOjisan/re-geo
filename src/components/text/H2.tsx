import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H2 = (props: Props) => {
  const { children, className } = props;
  return <StyledH2 className={className}>{children}</StyledH2>;
};

const StyledH2 = styled.h2`
  color: #ffcc00;
  font-size: 36px;
  line-height: 40px;
  font-family: inherit;
  font-weight: bold;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H2;
