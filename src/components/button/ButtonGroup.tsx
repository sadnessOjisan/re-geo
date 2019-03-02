import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ButtonGroup = (props: Props) => {
  const { className, children } = props;
  return <SButtonGroup className={className}>{children}</SButtonGroup>;
};

const SButtonGroup = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
  white-space: nowrap;
  vertical-align: middle;
`;

export default ButtonGroup;
