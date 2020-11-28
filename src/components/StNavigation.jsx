import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const StNavigation = () => {
  return (
    <div id="StNavigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Test It !!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Nav.Link>Test to do</Nav.Link>
          <Nav.Link>Tests done</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default StNavigation;
