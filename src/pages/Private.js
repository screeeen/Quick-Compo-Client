import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";


class Private extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.user.username}</h1>
      </>
    );
  }
}

export default withAuth(Private);
