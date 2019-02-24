import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H4 = (props: Props) => {
  const { children, className } = props;
  return <StyledH4 className={className}>{children}</StyledH4>;
};

const StyledH4 = styled.h4`
  color: #6f0;
  font-size: 20px;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default H4;
