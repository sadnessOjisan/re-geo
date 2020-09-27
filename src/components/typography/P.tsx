import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Component = (props: Props) => {
  const { children, className } = props;
  return <p className={className}>{children}</p>;
};

const StyledComponent = styled.p<Props>`
  display: block;
  line-height: 20px;
  color: #ff0;
  font-size: 16px;
`;

export const P = StyledComponent;
