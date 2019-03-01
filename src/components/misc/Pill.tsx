import * as React from "react";
import styled from "styled-components";

interface Props {
  isActive?: boolean;
  isDisable?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Pill = (props: Props) => {
  const { isActive, children, className, isDisable } = props;
  return (
    <StyledPill className={className}>
      <Link isActive={isActive} isDisable={isDisable}>
        {children}
      </Link>
    </StyledPill>
  );
};

const StyledPill = styled.li`
  line-height: 20px;
  display: list-item;
`;

const Link = styled.a`
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 5px;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: 2px;
  line-height: 14px;
  display: inline-block; /* WHY? */
  text-decoration: underline;
  cursor: pointer;
  color: ${props =>
    props.isActive ? "#fff" : props.isDisable ? "#999" : "#0ee"} !important;
  background-color: ${props => (props.isActive ? "#0ee" : "#fff")} !important;
`;

export default Pill;
