import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';

class GamesList extends Component {
render() {
  return (
      <div>
      <h1>games page</h1>
      
      </div>
    )
  }
}

export default withAuth(GamesList);