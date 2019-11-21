import React, { Component } from "react";
import Credentials from "../components/Credentials";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>Quick Compo</h1>
        <Credentials handleFormSubmit credentialsType="Login"/>
      </div>
    );
  }
}

export default Login;
