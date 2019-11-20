import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
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
        <h2>Login</h2>
        <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
