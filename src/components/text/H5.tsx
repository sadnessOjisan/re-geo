import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const H5 = (props: Props) => {
  const { children } = props;
  return <StyledH5>{children}</StyledH5>;
};

const StyledH5 = styled.h5`
  color: #00f;
  font-size: 16px;
  line-height: 40px;
  margin: 10px 0;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
    "ChalkboardSE-Regular", "Marker Felt", "Purisa", "URW Chancery L", cursive,
    sans-serif;
`;

export default H5;
