import React from "react";
import styled from "styled-components";

interface PassedProps {
  vertical?: boolean;
  horizontal?: boolean;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)<PassedProps>`
  display: flex;
  height: ${(props: Props) => props.vertical && "100%"};
  align-items: ${(props: Props) => props.vertical && "center"};
  justify-content: ${(props: Props) => props.horizontal && "center"};
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { children, vertical, horizontal } = props;
  return (
    <StyledComponent vertical={vertical} horizontal={horizontal}>
      {children}
    </StyledComponent>
  );
};

export const Center = ContainerComponent;
