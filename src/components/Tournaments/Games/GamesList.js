import React, { Component } from 'react'
import { withAuth } from '../../../lib/AuthProvider';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from './../../helpers/Calls';
import GamesCell from './GamesCell';

class GamesList extends Component {
  constructor(props) {
    super(props);
    console.log('GAMES LIST props', props);

    this.state = {
      loggedIn: true,
      tournament: this.props.currentTournament,
      games: [],
    }
    console.log('GAMES LIST state', this.state);
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    //patch for presentation
    calls.getGames()
      .then(res => {
        console.log(res.data);
        const games = res.data;
        this.setState({ games });
      }, () => { this.generateList() })
  }

  generateList = () => {
    return this.state.games.map((oneGame,i) => {
      const { player1,player2,winner,_id } = oneGame;
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