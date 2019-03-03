import * as React from "react";
import styled from "styled-components";
import COLOR from "../../constants/color";

interface Props {
  type?: "success" | "warning" | "important" | "info" | "inverse";
  children: React.ReactNode;
  className?: string;
}

const Badge = (props: Props) => {
  const { type, children, className } = props;
  return (
    <StyledBadge type={type} className={className}>
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span<Props>`
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
        return COLOR.black;
      default:
        return COLOR.white;
    }
  }};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  vertical-align: baseline;
  background-color: ${(props: Props) => {
    switch (props.type) {
      case "success":
        return COLOR.green;
      case "warning":
        return COLOR.yellow1;
      case "important":
        return COLOR.red;
      case "info":
        return COLOR.cyan;
      case "inverse":
        return COLOR.black;
      default:
        return COLOR.Gray60;
    }
  }};
`;

export default Badge;
