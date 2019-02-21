import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const H2 = (props: Props) => {
  const { children } = props;
  return <StyledH2>{children}</StyledH2>;
};

const StyledH2 = styled.h2`
  color: #ffcc00;
  font-size: 36px;
  line-height: 40px;
  margin: 10px 0;
  font-family: inherit;
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

export default H2;
