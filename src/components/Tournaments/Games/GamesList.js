import React, { Component } from 'react'
import { withAuth } from '../../../lib/AuthProvider';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
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
    console.log('GAMES LIST props', this.props);

  }

  refreshList = () => {
    //patch for presentation
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
      <div>
        <Navbar />
        <h2>GAMES</h2>
        <div className="games-tables">
          {this.generateList()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withAuth(GamesList);