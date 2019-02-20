import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { storiesOf } from "@storybook/react";
import Navbar2 from "./Navbar";

storiesOf("Navbar", module).add("Navbar", () => <Navbar2>😀 😎 👍 💯</Navbar2>);

storiesOf("Navbar", module).add("Nav", () => (
  <Navbar2>
    <Navbar.Brand href="#home" style={{ color: "white" }}>
      React-Bootstrap
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" style={{ color: "white" }}>
          Home
        </Nav.Link>
        <Nav.Link href="#link" style={{ color: "white" }}>
          Link
        </Nav.Link>
        <NavDropdown
          title="Dropdown"
          id="basic-nav-dropdown"
          style={{ color: "white" }}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar2>
));
