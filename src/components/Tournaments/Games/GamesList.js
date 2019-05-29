import React, { Component } from 'react'
import { withAuth } from '../../../lib/AuthProvider';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from './../../helpers/Calls'


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
    this.state.games && this.state.games.map((oneGame) => {
      const { name } = oneGame;
      console.log(oneGame)
      return <p>{oneGame}</p>
    })
  }


render() {
  return (
      <div>
        <Navbar />
      <h2>GAMES</h2>
      generateList();
      <Footer/>
      </div>
    )
  }
}

export default withAuth(GamesList);