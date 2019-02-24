import * as React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Drudgesiren from "../../img/drudgesiren.gif";

interface Props {
  type: "alert" | "error" | "success" | "info";
  children: React.ReactNode;
  className?: string;
  onClose: any;
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

const StyledAlerts = styled.div`
  width: 100%;
  color: ${props => {
    switch (props.type) {
      case "alert":
        return "#000";
      case "error":
        return "#fff";
      case "success":
        return "#fff";
      case "info":
        return "#000";
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case "alert":
        return "#ff0";
      case "error":
        return "#f00";
      case "success":
        return "#0a0";
      case "info":
        return "#0ff";
    }
  }};
  border: ${props => {
    switch (props.type) {
      case "alert":
        return "1px solid #f00";
      case "error":
        return "1px solid #f00";
      case "success":
        return "1px solid #0a0";
      case "info":
        return "1px solid #aa0";
    }
  }};
  padding: 8px 35px 8px 14px;
  margin-bottom: 20px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  display: block;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
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
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  text-decoration: underline;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
  margin-right: 4px;
`;

const Title = styled.strong`
  font-weight: bold;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

const AlertTitle = styled.h4`
  margin: 0;
  color: #000;
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
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default Alerts;
