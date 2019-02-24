import * as React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

// TODO: should use styled-components
const css = {
  width: "220px",
  backgroundColor: "#000",
  border: "1px solid #0f0",
  color: "#555"
};

const optionCss = {
  fontWeight: "normal",
  display: "block",
  whiteSpace: "pre",
  minHeight: "1.2em",
  padding: "0px 2px 1px"
};

interface Props {
  items: Array<string>;
}

const Input = (props: Props) => {
  const { items } = props;
  return (
    <select style={css}>
      {items.map(item => (
        <option style={optionCss}>{item}</option>
      ))}
    </select>
  );
};

export default Input;
