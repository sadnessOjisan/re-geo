import * as React from "react";
import styled from "styled-components";

interface Props {
  type: "success" | "warning" | "important" | "info" | "inverse" | null;
  children: React.ReactNode;
  className?: string;
}

const ProgressBar = (props: Props) => {
  const { type, children, className } = props;
  return (
    <StyledBadge type={type} className={className}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span`
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
  padding-right: 9px;
  padding-left: 9px;
  border-radius: 9px;
  display: inline-block;
  padding: 2px 4px;
  font-size: 13.536px;
  font-weight: bold;
  line-height: 14px;
  color: ${(props: Props) => {
    switch (props.type) {
      case "warning":
        return "black";
      default:
        return "#fff";
    }
  }};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  vertical-align: baseline;
  background-color: ${(props: Props) => {
    switch (props.type) {
      case "success":
        return "green";
      case "warning":
        return "yellow";
      case "important":
        return "red";
      case "info":
        return "#0ff";
      case "inverse":
        return "black";
      default:
        return "#999";
    }
  }};
`;

export default ProgressBar;
