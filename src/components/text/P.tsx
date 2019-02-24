import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  color: string | null;
  fontSize: number;
  className: string;
}

const P = (props: Props) => {
  const { children, color, fontSize, className } = props;
  return (
    <StyledP color={color} fontSize={fontSize} className={className}>
      {children}
    </StyledP>
  );
};

const StyledP = styled.p`
  margin: 0 0 10px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  line-height: 20px;
  color: ${props => (props.color ? props.color : "#ff0")};
`;

export default P;
