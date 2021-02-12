import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <FormGroup>
          <FormLabel>User name</FormLabel>
          <FormControl type="text" placeholder="Enter email" />
          <FormLabel>User password</FormLabel>
          <FormControl type="password" placeholder="Enter password" />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </div>
    );
  }
}

export default Login;
