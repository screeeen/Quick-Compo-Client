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
    this.refreshPlayersList();
  }


  refreshPlayersList = () =>{
    calls.getPlayersOfTournament(this.props.location.state.tournamentId)
    .then(res => {
      
      const playersIntoTournament = res.data.players;
      this.setState({ playersIntoTournament });
    })
  }

  generatePlayersList = () => {
    return this.state.playersIntoTournament.map((onePlayer,i) => {
      const { name,img,position,score,_id } = onePlayer;
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
    const { playersIntoTournament } = this.state;
    console.log(playersIntoTournament)
    return (
      <div>
        <Navbar />
        <AddPlayer getPlayers={this.refreshPlayersList}/>
        {/* <PlayersList /> */}
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
