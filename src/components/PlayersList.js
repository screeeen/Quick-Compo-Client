import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";

class PlayersList extends Component {
  render() {
    return (
      <div>
      <h1>players page</h1>

      </div>
    )
  }
}

export default withAuth(PlayersList);
