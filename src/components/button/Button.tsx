import * as React from "react";
import Button from "react-bootstrap/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Rainbow from "../../img/rainbow.gif";

// TODO: should use styled-components
const css = {
  border: "6px ridge", // TODO: @btnBorderを追加
  background: `#000 url(${Rainbow}) top left`
};

const StyledButton = () => {
  return <Button style={css}>aaaaaaaaaaa</Button>;
};

export default StyledButton;
