import * as React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { children, className } = props;
  return <ul className={className}>{children}</ul>;
};

const StyledComponent = styled(Component)`
  margin-bottom: 20px;
  margin-left: 0;
  list-style: none;
  padding: 0;
  margin: 0 0 10px 25px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

export const PillNav = StyledComponent;
