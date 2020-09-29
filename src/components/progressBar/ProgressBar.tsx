import * as React from "react";
import styled from "styled-components";
import { Progress } from "../../img/index";

interface PassedProps {
  rate: number;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className={"bar"} />
    </div>
  );
};

const StyledComponent = styled(Component)<PassedProps>`
  & .bar {
    background: #c0c0c0 url(${Progress}) top left repeat-x !important;
    border: 1px solid #fff;
    border-top: 1px solid #808080;
    border-left: 1px solid #808080;
    width: ${(props) => props.rate}%;
    height: 20px;
  }
`;

const ContainerComponent: React.FC<PassedProps> = (props) => {
  const { rate } = props;
  return <StyledComponent rate={rate}></StyledComponent>;
};

export const ProgressBar = ContainerComponent;
