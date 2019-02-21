import * as React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

// TODO: should use styled-components
const css = {
  display: "block",
  marginBottom: "5px",
  ontSize: "16px",
  fontWeight: "normal",
  lineHeight: "20px",
  cursor: "pointer",
  color: "#ff0"
};

interface Props {
  children: React.ReactNode;
}

const Label = (props: Props) => {
  const { children } = props;
  return <label style={css}>{children}</label>;
};

export default Label;
