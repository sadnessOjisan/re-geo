import * as React from "react";
import styled from "styled-components";
import FontStyle from "../../constants/font";

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
  font-family: ${FontStyle.OldFassion};
`;
export const H4 = StyledComponent;
