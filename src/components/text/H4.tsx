import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const H4 = (props: Props) => {
  const { children, className } = props;
  return <StyledH4 className={className}>{children}</StyledH4>;
};

const StyledH4 = styled.h4`
  color: #6f0;
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H4;
