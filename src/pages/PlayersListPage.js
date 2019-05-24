import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import Navbar from './../components/Navbar';
import AddPlayerBlock from './../components/AddPlayerBlock';
import PlayersListBlock from './../components/Lists/PlayersListBlock';

class PlayersListPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <h1>Add players here</h1>
      <AddPlayerBlock />
      <PlayersListBlock />
      </div>
    )
  }
}

export default withAuth(PlayersListPage);
