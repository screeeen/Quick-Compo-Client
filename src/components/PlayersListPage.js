import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import Navbar from './Navbar';
import AddPlayerBlock from './AddPlayerBlock'

class PlayersListPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <h1>Add players here</h1>
      <AddPlayerBlock />
      
      </div>
    )
  }
}

export default withAuth(PlayersListPage);
