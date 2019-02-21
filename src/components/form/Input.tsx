import * as React from "react";
import FormControl from "react-bootstrap/FormControl";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

// TODO: should use styled-components
const css = {
  backgroundColor: "#000",
  border: "1px solid #0f0"
};

interface Props {
  children: React.ReactNode;
}

const Input = (props: Props) => {
  const { children } = props;
  return <FormControl style={css}>{children}</FormControl>;
};

export default Input;
