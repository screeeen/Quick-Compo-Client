import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import Navbar from './../components/Navbar';
import AddPlayer from '../components/AddPlayer';
import PlayersList from './../components/Lists/PlayersList';

class PlayersListPage extends Component {
constructor(props){
  super(props);
}


  render() {
    return (
      <div>
        <Navbar />
      <h1>Add players here:</h1>
      <AddPlayer />
      <PlayersList />
      </div>
    )
  }
}

export default withAuth(PlayersListPage);
