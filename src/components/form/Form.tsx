import * as React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Stars from "../../img/stars.gif";

// TODO: should use styled-components
const css = {
  backgroundColor: "#000",
  background: `#000 url(${Stars}) top left`
};

interface Props {
  children: React.ReactNode;
}

const StyledForm = (props: Props) => {
  const { children } = props;
  return <Form style={css}>{children}</Form>;
};

export default StyledForm;
