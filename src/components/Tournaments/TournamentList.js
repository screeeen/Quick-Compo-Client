import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import TournamentCell from './TournamentCell';
import TournamentLabels from './TournamentLabels';
import Ribbon from '../Ribbon';
import BtnAddTournament from './BtnAddTournament';
import calls from '../helpers/Calls';

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

  componentDidMount() {
    calls.getTournaments()
      .then(res => {
        const tournaments = res.data;
        this.setState({ tournaments });
      })
  }

  updateCurrentTournament(tournament) {
    const { name, img, players, games, id } = tournament;
    console.log("hoola?? update current tournament?");
    
    this.setState({
      currentTournamentId: id,
      currentTournamentName: name,
      currentTournamentImg: img,
      currentTournamentPlayers: players,
      currentTournamentGames: games
    });
  }

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
          <BtnAddTournament />
          <Ribbon name="TOURNAMENTS" />
          <TournamentLabels secondTitle="tournament" thirdTitle="add" fourthTitle="players" sixthTitle="edit" seventhTitle="delete" />
          {this.generateTournamentsList()}
        </div>)
    } else { return <Redirect to="/error" /> };
  }

  render() {
    // console.log("tournament list",this.state);
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
