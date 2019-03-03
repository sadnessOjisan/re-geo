import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constants/color";
import Drudgesiren from "../../img/drudgesiren.gif";

interface Props {
  type: "alert" | "error" | "success" | "info";
  children: React.ReactNode;
  className?: string;
  onClose?: any;
}

const Alerts = (props: Props) => {
  const { type, children, className, onClose } = props;
  switch (type) {
    case "alert":
      return (
        <StyledAlerts type={type} className={className}>
          <Close onClick={onClose}>x</Close>
          <StyledImg src={Drudgesiren} />
          <AlertTitle>{type} </AlertTitle> {/* need white space */}
          {children}
        </StyledAlerts>
      );
    default:
      return (
        <StyledAlerts type={type} className={className}>
          <Close onClick={onClose}>x</Close>
          <Title>{type} </Title> {/* need white space */}
          {children}
        </StyledAlerts>
      );
  }
};

const StyledAlerts = styled.div<Props>`
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
`;

const StyledImg = styled.img`
  float: left;
`;

const Close = styled.a`
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
`;

const Title = styled.strong`
  font-weight: bold;
`;

const AlertTitle = styled.h4`
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
`;

export default Alerts;
