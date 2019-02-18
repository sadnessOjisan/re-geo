import * as React from "react";
import Button from "react-bootstrap/Button";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

// TODO: should use styled-components
const css = {
  backgroundColor: "black",
  border: "6px ridge", // TODO: @btnBorderを追加
  background: "#000 url('../../img/rainbow.gif') top left"
};

const StyledButton = () => {
  return <Button style={css}>aaaaaaaaaaa</Button>;
};

export default StyledButton;
