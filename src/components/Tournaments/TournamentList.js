// displays a list of cells

import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import TournamentCell from './TournamentCell';
import Ribbon from './../Ribbon';
import BtnAddTournament from './BtnAddTournament';
import calls from './../helpers/Calls';

class TournamentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      tournaments: [],
      currentTournamentId: '',
      currentTournamentName: '',
      currentTournamentImg: '',
      currentTournamentPlayers: [],
      currentTournamentGames: []
    }
    this.updateCurrentTournament = this.updateCurrentTournament.bind(this);
  }

  //lifecycle: calls the available tournaments and sets the state with the retrieved data
  componentDidMount() {
    calls.getTournaments()
      .then(res => {
        const tournaments = res.data;
        this.setState({ tournaments });
      })
  }

  // updates the state with curent tournament data
  updateCurrentTournament(tournament) {
    const { name, img, players, games, id } = tournament;
    this.setState({
      currentTournamentId: id,
      currentTournamentName: name,
      currentTournamentImg: img,
      currentTournamentPlayers: players,
      currentTournamentGames: games
    });
  }

  // gets the list of available tournaments and populates each TournamentCell component.
  // returns them to the front end UI 

  generateTournamentsList = () => {
    return this.state.tournaments.slice(0).reverse().map((oneTournament, i) => {
      const { name, img, players, games, _id } = oneTournament;
      return (
        <TournamentCell className="fadeIn"
          key={i}
          name={name}
          img={img}
          players={players}
          games={games}
          _id={_id}
        />
      )
    })
  }

  checkIfLogged = () => {
    if (this.state.loggedIn) {
      return (
        <div className="container-tournaments">
          <Ribbon name="TOURNAMENTS" />
<BtnAddTournament />
          {this.generateTournamentsList()}
        </div>)
    } else { return <Redirect to="/error" /> };
  }

  render() {
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
