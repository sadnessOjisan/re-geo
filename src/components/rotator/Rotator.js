import React from "react";
import styled, { keyframes } from "styled-components";

const Rotator = props => {
  const { className, children, speed } = props;
  return (
    <Wrapper className={className} speed={speed}>
      {children}
    </Wrapper>
  );
};

const Rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`;

const Wrapper = styled.div`
  animation: ${Rotate} ${props => (props.speed ? props.speed : 5)}s linear
    infinite;
  display: inline-block;
`;

export default Rotator;
