import React, { Component } from "react";
import { Link } from "react-router-dom";

import Credentials from "../components/Credentials";


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
