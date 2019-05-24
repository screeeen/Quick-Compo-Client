import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import TournamentCell from '../TournamentCell';
// import AddTournamentPage from './AddTournamentPage';

import axios from 'axios';
import './TournamentList.css';


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
        <div>
          <Navbar />
          <h1>tournaments page</h1>
          <button className="button"><Link to="/tournaments/add-tournament">add a ccccompo</Link></button>

          <table>
            <tbody>
              <tr>
                <th>
                  COMPO
          </th>
                <th>
                  IMAGES
          </th>
                <th>
                  GAMES
          </th>
              </tr>
              {this.generateTournamentsList()}
            </tbody>
          </table>
        </div>)

    } else { return <Redirect to="/error" /> };
  }


  render() {
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
