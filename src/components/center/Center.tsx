import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
}

const Center = (props: Props) => {
  const { className, children, vertical, horizontal } = props;
  return (
    <Wrapper
      className={className}
      horizontal={horizontal === true}
      vertical={vertical === true}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  display: flex;
  height: ${(props: Props) => props.vertical && "100%"};
  align-items: ${(props: Props) => props.vertical && "center"};
  justify-content: ${(props: Props) => props.horizontal && "center"};
`;

export default Center;
