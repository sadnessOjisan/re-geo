import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PilNav = (props: Props) => {
  const { children, className } = props;
  return <Nav className={className}>{children}</Nav>;
};

const Nav = styled.ul`
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

export default PilNav;
