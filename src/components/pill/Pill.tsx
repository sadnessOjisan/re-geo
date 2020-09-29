import * as React from "react";
import styled from "styled-components";

interface PassedProps {
  isActive?: boolean;
  isDisable?: boolean;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <li className={className}>
      <a>{children}</a>
    </li>
  );
};

// TODO: li のアイテムスタイルを消す
const StyledComponent = styled(Component)<PassedProps>`
  line-height: 20px;
  display: list-item;

  & a {
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
    color: ${(props) =>
      props.isActive ? "#fff" : props.isDisable ? "#999" : "#0ee"} !important;
    background-color: ${(props) =>
      props.isActive ? "#0ee" : "#fff"} !important;
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { isActive, isDisable, children } = props;
  return (
    <StyledComponent isActive={isActive} isDisable={isDisable}>
      {children}
    </StyledComponent>
  );
};

export const Pill = ContainerComponent;
