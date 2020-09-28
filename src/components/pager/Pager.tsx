import * as React from "react";
import styled from "styled-components";

// TODO: change color
interface PassedProps {
  type?: "disabled";
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { type, className, children } = props;
  return (
    <li className={className}>
      <a type={type}>{children}</a>
    </li>
  );
};

const StyledComponent = styled(Component)<Props>`
  display: inline;
  line-height: 20px;
  margin: 20px 0;
  text-align: center;
  list-style: none;

  & a {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    text-decoration: underline;
    color: ${(props: Props) =>
      props.type === "disabled" ? "#999" : "#0ee"} !important;
    font-size: 16px;
    cursor: default;
    background-color: #fff;
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { type, children } = props;
  return <StyledComponent type={type}>{children}</StyledComponent>;
};

export const Pager = ContainerComponent;
