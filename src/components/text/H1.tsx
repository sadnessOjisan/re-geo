import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H1 = (props: Props) => {
  const { children, className } = props;
  return <StyledH1 className={className}>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  color: #f00;
  font-size: 44px;
  line-height: 40px;
  font-weight: bold;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H1;
