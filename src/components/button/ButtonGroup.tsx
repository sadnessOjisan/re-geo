import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const StyledButtonGroup = (props: Props) => {
  const { className, children } = props;
  return <ButtonGroup className={className}>{children}</ButtonGroup>;
};

const ButtonGroup = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
  white-space: nowrap;
  vertical-align: middle;
`;

export default StyledButtonGroup;
