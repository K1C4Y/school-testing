import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const TrNavigation = () => {
  return (
    <div id="TrNavigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Test It !!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link>Create Test</Nav.Link>
          <Nav.Link>Tests To Grade</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TrNavigation;
