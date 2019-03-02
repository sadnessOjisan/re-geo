import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  speed?: number;
}

const Blink = (props: Props) => {
  const { className, children, speed } = props;
  return (
    <Wrapper className={className} speed={speed}>
      {children}
    </Wrapper>
  );
};

const Blinker = keyframes`
  0% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${Blinker} ${(props: Props) => (props.speed ? props.speed : 0.15)}s
    step-end infinite;
`;

Blink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  speed: PropTypes.number
};

export default Blink;
