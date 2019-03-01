import React from "react";
import styled, { keyframes } from "styled-components";

const Zoom = props => {
  const { className, children, speed, scale } = props;
  return (
    <Wrapper className={className} scale={scale} speed={speed}>
      {children}
    </Wrapper>
  );
};

const Rotate = keyframes`
0% {
  transform: scale(1);
}

100% {
  transform: scale(3);
}
`;

const Wrapper = styled.div`
  animation: ${Rotate} ${props => (props.speed ? props.speed : 5)}s linear
    infinite alternate;
  display: inline-block;
`;

export default Zoom;
