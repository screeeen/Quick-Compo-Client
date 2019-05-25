import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import calls from './../helpers/Calls'

 class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      playersIntoTournament: []
    }
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList(){
    console.log('this props player list c',this.props);
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
    console.log('Phere?!?!?')
    return this.state.playersIntoTournament.forEach((onePlayer)=>{
      console.log('Player List calling???', name)
       const {name,img,position,score} = onePlayer;
       return (
         <p>{name}</p>
       )
    })
  }


  render() {
    return (
      <div>
        <h1>players</h1>
        {this.generatePlayersList()}
      </div>
    )
  }
}

export default withAuth(PlayersList);
