import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const TrNavigation = ({setTTGB,setCTB,logOut}) => {

  const createTest = () => {
   setCTB(true) 
   setTTGB(false) 
}

  const testsToGrade = () => {
   setCTB(false) 
   setTTGB(true) 
}

  return (
    <div id="TrNavigation">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Test It !!!</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={createTest}>Create Test</Nav.Link>
          <Nav.Link onClick={testsToGrade}>Tests To Grade</Nav.Link>
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TrNavigation;
