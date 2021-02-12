import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <h2>Register</h2>
        <FormGroup>
          <FormLabel>User name</FormLabel>
          <FormControl type="text" placeholder="Enter user name" />
          <FormLabel>User password</FormLabel>
          <FormControl type="password" placeholder="Enter password" />
          <FormLabel>Reapeat password</FormLabel>
          <FormControl type="password" placeholder="Confirm password" />
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </div>
    );
  }
}

export default Register;
