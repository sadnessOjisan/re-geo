import * as React from "react";
import styled from "styled-components";
import Image from "../../img/index";

interface Props {
  className?: string;
  rate?: number;
}

const ProgressBar = (props: Props) => {
  const { className, rate } = props;
  return (
    <div className={className}>
      <StyledBar rate={rate} />
    </div>
  );
};

const StyledBar = styled.div<Props>`
  background: #c0c0c0 url(${Image.Progress}) top left repeat-x !important;
  border: 1px solid #fff;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  width: ${(props: Props) => (props.rate ? props.rate : 100)}%;
  height: 20px;
`;

export default ProgressBar;
