import * as React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className: string;
}

const H5 = (props: Props) => {
  const { children, className } = props;
  return <StyledH5 className={className}>{children}</StyledH5>;
};

const StyledH5 = styled.h5`
  color: #00f;
  font-size: 16px;
  line-height: 40px;
  font-weight: bold;
  line-height: 20px;
  text-rendering: optimizelegibility;
  display: block;
`;

export default H5;
