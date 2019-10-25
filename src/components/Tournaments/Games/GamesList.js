// GamesList component that displays GamesCell. 
// the games list is retrieved when init the component via lifecycle method
// that calls the getRounds method. This method calculates the rounds
// then populates each GamesCell component to be displayed in the UI

import React, { Component } from 'react'
import { withAuth } from '../../../lib/AuthProvider';
import calls from './../../helpers/Calls';
import GamesCell from './GamesCell';

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      tournament: this.props.currentTournament,
      games: [],
    }
  }

  componentDidMount() {
    this.refreshList();
  }

  // there is sent the tournament and the players, the server returns the games object
  refreshList = () => {
    const { tournament, players } = this.props.location.state;
    calls.getRounds(tournament.tournamentId, players)
      .then(res => {
        const games = res.data.games;
        this.setState({ games });
      }, () => { this.generateList() })
  }

  generateList = () => {
    return this.state.games.map((oneGame, i) => {
      const { player1, player2, winner, _id } = oneGame;
      const { tournament } = this.props.location.state;

      return (
        <GamesCell
          key={i}
          player1={player1.name}
          player2={player2.name}
          player1Id={player1._id}
          player2Id={player2._id}
          player1Img={player1.img}
          player2Img={player2.img}
          player1Score={player1.score}
          player2Score={player2.score}
          winner={winner}
          _id={_id}
          tournament={tournament}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
      <div className="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">GAMES LIST</strong>
        </h1>
        </div>
        <div className="games-tables">
          {this.generateList()}
        </div>
      </div>
    )
  }
}

export default withAuth(GamesList);