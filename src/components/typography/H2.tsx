import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Component = (props: Props) => {
  const { children, className } = props;
  return <h2 className={className}>{children}</h2>;
};

const StyledComponent = styled(Component)`
  color: #ffcc00;
  font-size: 36px;
  line-height: 40px;
  font-family: inherit;
  font-weight: bold;
  text-rendering: optimizelegibility;
  display: block;
`;

export const H2 = StyledComponent;
