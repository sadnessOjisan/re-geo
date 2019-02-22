import * as React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Bar from "../../img/progress.gif";

interface Props {}

const ProgressBar = (props: Props) => {
  return (
    <div className="progress">
      <StyledBar className="bar" />
    </div>
  );
};

const StyledBar = styled.div`
  background: #c0c0c0 url(${Bar}) top left repeat-x !important;
  border: 1px solid #fff;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  width: 60%;
`;

export default ProgressBar;
