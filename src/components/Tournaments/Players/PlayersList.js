import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from './../../helpers/Calls'
import PlayerCell from './PlayerCell'
import AddPlayer from './AddPlayer';
import { Link } from 'react-router-dom'


class PlayersList extends Component {
  constructor(props) {
    super(props);
    console.log('PLAYER LIST props', props);

    this.state = {
      loggedIn: true,
      tournament: this.props.currentTournament,
      tournamentId: this.props.location.state,
      playersIntoTournament: [],
    }
    console.log('PLAYER LIST state', this.state);
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
      console.log('players into tournament', players, this.state.tournamentId);

      return (
        <Link to={{ pathname: `/games`, state: { tournament: this.state.tournamentId, players } }}>
          <button>START GAMES</button>
        </Link >

      )
    }
  }

  generatePlayersList = () => {
    return this.state.playersIntoTournament.map((onePlayer, i) => {
      const { name, img, position, score, _id } = onePlayer;
      console.log(onePlayer)
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
    {/* const { playersIntoTournament } = this.state;
    console.log(playersIntoTournament) */}
    return (
      <div>
        <Navbar />
        {this.togglePlayButton()}
        <AddPlayer getPlayers={this.refreshPlayersList} />
        <div>
          <h2>PLAYERS</h2>
          {this.generatePlayersList()}
        </div>
        <Footer />

      </div>
    )
  }
}

export default withAuth(PlayersList);
