import * as React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;
  font-size: 0;
  white-space: nowrap;
  vertical-align: middle;
`;

export const ButtonGroup = StyledComponent;
