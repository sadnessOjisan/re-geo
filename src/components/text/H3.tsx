import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H3 = (props: Props) => {
  const { children, className } = props;
  return <StyledH3 className={className}>{children}</StyledH3>;
};

const StyledH3 = styled.h3`
  color: #ff0;
  font-size: 28px;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default H3;
