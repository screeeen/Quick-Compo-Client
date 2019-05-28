import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import court from './../images/court.gif'

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
      <div className="container login">
        <div className="splashImg">
          <img src={court} alt='img' />
        </div>
        <h1>Quick Compo</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input className="input-field"
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.handleChange}
          />
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
