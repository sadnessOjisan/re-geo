import * as React from "react";
import styled from "styled-components";
import Image from "../../img/index";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ProgressBar = (props: Props) => {
  const { className } = props;
  return (
    <div className={className}>
      <StyledBar className="bar" />
    </div>
  );
};

const StyledBar = styled.div`
  background: #c0c0c0 url(${Image.Bar}) top left repeat-x !important;
  border: 1px solid #fff;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  width: 60%;
`;

export default ProgressBar;
