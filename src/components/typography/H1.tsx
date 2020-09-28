import * as React from "react";
import styled from "styled-components";
import FontStyle from "../../constants/font";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Component = (props: Props) => {
  const { children, className } = props;
  return <h1 className={className}>{children}</h1>;
};

const StyledComponent = styled(Component)`
  color: #f00;
  font-size: 44px;
  line-height: 40px;
  font-weight: bold;
  text-rendering: optimizelegibility;
  display: block;
  font-family: ${FontStyle.OldFassion};
`;

export const H1 = StyledComponent;
