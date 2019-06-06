import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
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
        <div>
          <Link to={{ pathname: `/games`, state: { tournament: this.state.tournamentId, players } }}>
            <p>START GAMES</p>
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
        {this.togglePlayButton()}
        <AddPlayer getPlayers={this.refreshPlayersList} />
        <div>
        <div className="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">CURRENT PLAYERS</strong>
        </h1>
        </div>
          {this.generatePlayersList()}
        </div>

      </div>
    )
  }
}

export default withAuth(PlayersList);
