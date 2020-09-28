import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constants/color";
import Drudgesiren from "../../img/drudgesiren.gif";

interface PassedProps {
  onClose?: any;
  type: "alert" | "error" | "success" | "info";
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { type, children, className, onClose } = props;
  switch (type) {
    case "alert":
      return (
        <div className={className}>
          <a onClick={onClose}>x</a>
          <img src={Drudgesiren} />
          <h4>{type} </h4> {/* need white space */}
          {children}
        </div>
      );
    default:
      return (
        <div className={className}>
          <a onClick={onClose}>x</a>
          <strong>{type} </strong> {/* need white space */}
          {children}
        </div>
      );
  }
};

const StyledComponent = styled(Component)<Props>`
  width: 100%;
  color: ${(props: Props) => {
    switch (props.type) {
      case "alert":
        return COLOR.black;
      case "error":
        return COLOR.white;
      case "success":
        return COLOR.white;
      case "info":
        return COLOR.black;
    }
  }};
  background-color: ${(props: Props) => {
    switch (props.type) {
      case "alert":
        return COLOR.yellow1;
      case "error":
        return COLOR.red;
      case "success":
        return COLOR.green;
      case "info":
        return COLOR.cyan;
    }
  }};
  border: ${(props: Props) => {
    switch (props.type) {
      case "alert":
        return `1px solid ${COLOR.red}`;
      case "error":
        return `1px solid ${COLOR.red}`;
      case "success":
        return `1px solid ${COLOR.green}`;
      case "info":
        return `1px solid ${COLOR.yellowDark}`;
    }
  }};
  padding: 8px 35px 8px 14px;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  display: block;

  & a {
    position: relative;
    top: -2px;
    right: -21px;
    line-height: 20px;
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.black};
    text-shadow: 0 1px 0 ${COLOR.white};
    opacity: 0.2;
    text-decoration: underline;
    margin-right: 4px;
  }

  & img {
    float: left;
  }

  & h4 {
    margin: 0;
    color: ${COLOR.black};
    font-size: 20px;
    font-family: inherit;
    font-weight: bold;
    line-height: 20px;
    text-rendering: optimizelegibility;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  & strong {
    font-weight: bold;
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { type, onClose, children } = props;
  return (
    <StyledComponent type={type} onClose={onClose}>
      {children}
    </StyledComponent>
  );
};

export const Alerts = ContainerComponent;
