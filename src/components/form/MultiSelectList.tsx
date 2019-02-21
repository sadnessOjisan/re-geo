import * as React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

// TODO: should use styled-components
const css = {
  width: "220px",
  backgroundColor: "#000",
  border: "1px solid #0f0",
  color: "#555",
  marginBottom: "0",
  verticalAlign: "middle"
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

const MultiSelectList = (props: Props) => {
  const { items } = props;
  return (
    <select style={css} multiple="multiple">
      {items.map(item => (
        <option style={optionCss}>{item}</option>
      ))}
    </select>
  );
};

export default MultiSelectList;
