import React, { Component } from "react";
import Credentials from "../components/Credentials";
import { Link } from "react-router-dom";


class Signup extends Component {
  render() {
    return (
      <div className="container">
        <h1>Quick Compo</h1>
        <Credentials handleFormSubmit credentialsType="Signup"/>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
