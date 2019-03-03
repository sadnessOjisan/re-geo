import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const H3 = (props: Props) => {
  const { children, className } = props;
  return <StyledH3 className={className}>{children}</StyledH3>;
};

const StyledH3 = styled.h3`
  color: #ff0;
  font-size: 28px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H3;
