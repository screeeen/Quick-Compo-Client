import React, { Component } from "react";
import Credentials from "../components/Credentials";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>Quick Compo</h1>
        <Credentials handleFormSubmit credentialsType="Login"/>
        <p>
          You don't have an account?
          <Link to={"/signup"}> Register</Link>
        </p>
      </div>
    );
  }
}

export default Login;
