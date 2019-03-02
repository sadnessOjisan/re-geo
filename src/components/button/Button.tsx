import * as React from "react";
import styled from "styled-components";
import Rainbow from "../../img/rainbow.gif";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "inverse";
  size?: "normal" | "large" | "small";
  isDisable?: boolean;
}

const Button = (props: Props) => {
  const { className, children, type, size, isDisable } = props;
  return (
    <SButton
      className={className}
      type={type}
      size={size}
      isDisable={isDisable}
    >
      {children}
    </SButton>
  );
};

const SButton = styled.a<Props>`
  border: 6px ridge #bbb;
  padding: ${(props: Props) => {
    switch (props.size) {
      case "normal":
        return "4px 12px";
      case "large":
        return "11px 19px";
      case "small":
        return "2px 10px";
      default:
        return "4px 12px";
    }
  }};
  font-size: ${(props: Props) => {
    switch (props.size) {
      case "normal":
        return "16px";
      case "large":
        return "20px";
      case "small":
        return "13.6x";
      default:
        return "16px";
    }
  }};
  /* btn */
  display: inline-block;
  margin-bottom: 0;
  line-height: 20px;
  color: ${(props: Props) => {
    switch (props.type) {
      case "default":
        return "#333";
      case "primary":
      case "info":
      case "success":
      case "warning":
      case "danger":
      case "inverse":
        return "#fff";
      default:
        return "#333";
    }
  }} !important;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  cursor: pointer;
  background-color: #e6e6e6;
  background: ${(props: Props) => {
    switch (props.type) {
      case "default":
        return "#e6e6e6";
      case "primary":
        return `#000 url(${Rainbow}) top left`;
      case "info":
        return "#0ff";
      case "success":
        return "#0f0";
      case "warning":
        return "#fa0";
      case "danger":
        return "#f00";
      case "inverse":
        return "#000";
      default:
        return "##e6e6e6";
    }
  }};
  opacity: ${(props: Props) => (props.isDisable ? "0.65" : "")};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  text-decoration: underline !important;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default Button;
