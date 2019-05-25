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
  console.log('this props player list c',this.props);
  console.log('state PHere: ',this.state);
  calls.getPlayersOfTournament(`${this.props.currentTournament}`)
    .then(res => {
      const tournaments = res.data;
      console.log('response data in player list c',res.data);
      console.log('state in players list c',this.state);
      this.setState({ tournaments });
      console.log('state in players list c AFTER set',this.state);
    })
}

generatePlayersList(){
  console.log('state PHere: ',this.state);

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
