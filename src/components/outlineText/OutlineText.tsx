import React from "react";
import styled from "styled-components";

// TODO: font size も可変にしたい

interface PassedProps {
  inlineColor: string;
  outlineColor: string;
  strokeWidth: number;
}

interface Props extends PassedProps {
  className?: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
};

const StyledComponent = styled(Component)`
  color: ${(props: Props) => props.inlineColor};
  -webkit-text-stroke-color: ${(props: Props) => props.outlineColor};
  -webkit-text-stroke-width: ${(props: Props) => props.strokeWidth}px;
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { children, inlineColor, outlineColor, strokeWidth } = props;
  return (
    <StyledComponent
      strokeWidth={strokeWidth}
      inlineColor={inlineColor}
      outlineColor={outlineColor}
    >
      {children}
    </StyledComponent>
  );
};

export const OutlineText = ContainerComponent;
