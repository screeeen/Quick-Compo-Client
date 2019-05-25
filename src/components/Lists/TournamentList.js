import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import TournamentCell from '../TournamentCell';
// import AddTournamentPage from './AddTournamentPage';

import axios from 'axios';


class TournamentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      tournaments: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/tournaments`)
      .then(res => {
        const tournaments = res.data;
        this.setState({ tournaments });
      })
  }


  generateTournamentsList = () => {
    return this.state.tournaments.map((oneTournament, i) => {
      const { name, img, players, games } = oneTournament;

      return (
        <TournamentCell key={i} name={name} img={img} players={players} games={games} />
      )
    })
  }

  checkIfLogged = () => {
    if (this.state.loggedIn) {
      return (
        <div className="container tournamentList">
          <Navbar />
          <h2>TOURNAMENTS</h2>
          <button><Link to="/tournaments/add-tournament">ADD A NEW TOURNAMENT</Link></button>
          {this.generateTournamentsList()}
        </div>)

    } else { return <Redirect to="/error" /> };
  }


  render() {
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
