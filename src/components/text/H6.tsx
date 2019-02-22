import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H6 = (props: Props) => {
  const { children, className } = props;
  return <StyledH6 className={className}>{children}</StyledH6>;
};

const StyledH6 = styled.h6`
  color: #f0f;
  font-size: 13.6px;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default H6;
