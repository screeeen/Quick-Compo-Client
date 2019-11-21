import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Credentials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleFormSubmit: props.handleFormSubmit,
      credentialsType: props.credentialsType,
      username: "",
      password: ""
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if(this.state.credentialsType ==="SignUp"){
      this.props.signup({ username, password });
    } else {
      this.props.login({ username, password });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="credentials">
        <form onSubmit={this.handleFormSubmit}>
          <h2>{this.state.credentialsType}</h2>
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
          <input className="button" type="submit" value={this.state.credentialsType} />

        </form>
      </div>
    )
  }
}

export default withAuth(Credentials);