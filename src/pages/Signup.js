import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container credentials">
        <h1>Quick Compo</h1>
        <form onSubmit={this.handleFormSubmit}>
        <h2>Signup</h2>
          <label >Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Signup" />
          <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
        </form>
      </div>
    );
  }
}

export default withAuth(Signup);
