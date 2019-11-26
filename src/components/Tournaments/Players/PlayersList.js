// given an id gets players of a tournament when starting the component
// sets the state with the tournament and an array of players
// if the number of players is greater than 3 and pair, the start tournament button sets active
// if the START button is hit, the games route is called

import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import calls from './../../helpers/Calls'
import PlayerCell from './PlayerCell'
import AddPlayer from './AddPlayer';
import Ribbon from './../../Ribbon';
import TournamentLabel from './../TournamentLabels';
import { Link } from 'react-router-dom'

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      tournament: this.props.currentTournament,
      tournamentId: this.props.location.state,
      playersIntoTournament: [],
    }
    console.log("el state", this.state);
  }

  componentDidMount() {
    this.refreshPlayersList();
  }

  refreshPlayersList = () => {
    calls.getPlayersOfTournament(this.props.location.state.tournamentId)
      .then(res => {
        const playersIntoTournament = res.data.players;
        this.setState({ playersIntoTournament });
      })
  }

  togglePlayButton = () => {
    const playerNumber = this.state.playersIntoTournament.length;
    if (playerNumber >= 4 && playerNumber % 2 === 0) {
      const players = this.state.playersIntoTournament;
      return (
        <div>
          <Link to={{ pathname: `/games`, state: { tournament: this.state.tournamentId, players } }}>
            <button className="button">START GAMES</button>
          </Link >
        </div>
      )
    }
  }

  generatePlayersList = () => {
    return this.state.playersIntoTournament.map((onePlayer, i) => {
      const { name, img, position, score, _id } = onePlayer;
      return (
        <PlayerCell
          className="fadeIn"
          key={i}
          name={name}
          img={img}
          position={position}
          score={score}
          _id={_id}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
        < Ribbon name="current players" />
        <TournamentLabel secondTitle="name" seventhTitle="score" />
        <div className="container-tournaments">
          {this.generatePlayersList()}
        </div>
        <AddPlayer getPlayers={this.refreshPlayersList} />
        {this.togglePlayButton()}
      </div>
    )
  }
}

export default withAuth(PlayersList);
