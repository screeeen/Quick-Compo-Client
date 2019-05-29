import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from './../../helpers/Calls'
import PlayerCell from './PlayerCell'
import AddPlayer from './AddPlayer';


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
    this.refreshList();
  }

  refreshList = () => {
    // calls.getPlayersOfTournament(`${this.props.currentTournament}`)
    //   .then(res => {
    //     const playersIntoTournament = res.data;
    //     this.setState({ playersIntoTournament });
    //   }, () => { this.generatePlayersList() })


    //patch for presentation
    calls.getPlayers()
      .then(res => {
        console.log(res.data);
        const playersIntoTournament = res.data;
        this.setState({ playersIntoTournament });
      }, () => { this.generatePlayersList() })
  }

  generatePlayersList = () => {
    this.state.playersIntoTournament.players && this.state.playersIntoTournament.players.map((onePlayer) => {
      const { name } = onePlayer;
      console.log(onePlayer, name)
      return <p>{name}</p>
    })
  }

  render() {
    const { players } = this.state.playersIntoTournament;
    return (
      <div>
        <Navbar />
        {/* <AddPlayer getPlayers={this.refreshList} /> */}
        {/* <PlayersList /> */}
        <div>
          <h2>PLAYERS</h2>
          {players && players.map((item, i) => <PlayerCell key={i} name={item.name} img={item.img} />
          )}
        </div>
        <Footer />

      </div>
    )
  }
}

export default withAuth(PlayersList);
