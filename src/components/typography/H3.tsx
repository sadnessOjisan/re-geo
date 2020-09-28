import * as React from "react";
import styled from "styled-components";
import FontStyle from "../../constants/font";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Component = (props: Props) => {
  const { children, className } = props;
  return <h3 className={className}>{children}</h3>;
};

const StyledComponent = styled(Component)`
  color: #ff0;
  font-size: 28px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
  font-family: ${FontStyle.OldFassion};
`;

export const H3 = StyledComponent;
