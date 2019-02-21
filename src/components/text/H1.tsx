import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const H1 = (props: Props) => {
  const { children } = props;
  return <StyledH1>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  color: #f00;
  font-size: 44px;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  text-rendering: optimizelegibility;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default H1;
