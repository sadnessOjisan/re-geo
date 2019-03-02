import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H6 = (props: Props) => {
  const { children, className } = props;
  return <StyledH6 className={className}>{children}</StyledH6>;
};

const StyledH6 = styled.h6`
  color: #f0f;
  font-size: 13.6px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H6;
