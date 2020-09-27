import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Component = (props: Props) => {
  const { children, className } = props;
  return <h4 className={className}>{children}</h4>;
};

const StyledComponent = styled(Component)`
  color: #6f0;
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
`;
export const H4 = StyledComponent;
