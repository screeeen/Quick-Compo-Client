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
        console.log('this are the roudns?', res.data);
        const games = res.data;
        this.setState({ games });
      }, () => { this.generateList() })
  }

  generateList = () => {
    return this.state.games.map((oneGame, i) => {
      const { player1, player2, winner, _id } = oneGame;
      console.log(oneGame)
      return (
        <GamesCell
          key={i}
          player1={player1}
          player2={player2}
          winner={winner}
          _id={_id}
        />
      )
    })
  }


  render() {
    return (
      <div>
        <Navbar />
        <h2>GAMES</h2>
        {this.generateList()}
        <Footer />
      </div>
    )
  }
}

export default withAuth(GamesList);