import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import Navbar from './../components/Navbar';
import calls from './../components/helpers/Calls'

import AddPlayer from '../components/AddPlayer';


class PlayersListPage extends Component {
constructor(props){
  super(props);
  this.state = {
    loggedIn: true,
    tournament: this.props.currentTournament,
    playersIntoTournament: [],
  }
}

componentDidMount() {
  this.refreshList();
}

refreshList(){
  calls.getPlayersOfTournament(`${this.props.currentTournament}`)
    .then(res => {
      const tournaments = res.data;
      this.setState({ tournaments });
    })
}

generatePlayersList(){
  console.log('state Players list generate list: ',this.state);
  return this.state.playersIntoTournament.forEach((onePlayer)=>{
     const {name} = onePlayer;
     return (
       <p>{name}</p>
     )
  })
}


  render() {
    return (
      <div>
        <Navbar />
      <AddPlayer getPlayers={this.generatePlayersList} />
      {/* <PlayersList /> */}
      <div>
        <h2>PLAYERS</h2>
        {this.generatePlayersList()}
      </div>
      </div>
    )
  }
}

export default withAuth(PlayersListPage);
