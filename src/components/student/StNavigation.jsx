import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const StNavigation = ({setTestCode,setTestsCompleted}) => {
  const newTest = () => {
    setTestCode(true);
    setTestsCompleted(false);
  };
  const allTests = () => {
    setTestCode(false);
    setTestsCompleted(true);
  };

  return (
    <div id="StNavigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Test It !!!</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={allTests}>Your tests</Nav.Link>
          <Nav.Link onClick={newTest}>Complete new test</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default StNavigation;
