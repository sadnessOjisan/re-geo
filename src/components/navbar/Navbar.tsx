import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Stars from "../../img/stars.gif";

// TODO: should use styled-components
const css = {
  borderBottom: "1px solid #fff",
  background: `#000 url(${Stars}) top left`
};

interface Props {
  children: React.ReactNode;
}

const StyledNavbar = (props: Props) => {
  const { children } = props;
  return <Navbar style={css}>{children}</Navbar>;
};

export default StyledNavbar;
