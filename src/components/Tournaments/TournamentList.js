import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import TournamentCell from './TournamentCell';
import calls from './../helpers/Calls';



class TournamentList extends Component {
  constructor(props) {
    super(props);
    console.log("tournaments props ", props);
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
    console.log("tournaments this state ", this.state);
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

    this.setState({
      currentTournamentId:id,
      currentTournamentName:name,
      currentTournamentImg:img,
      currentTournamentPlayers:players,
      currentTournamentGames:games
    });
  }

  generateTournamentsList = () => {
    return this.state.tournaments.slice(0).reverse().map((oneTournament, i) => {
      const { name, img, players, games, _id } = oneTournament;
      return (
        <TournamentCell
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
        <div >
          <Navbar />
          <div className="tournamentList">
            <button><Link to={{pathname:'/tournaments/add-tournament'}}>ADD A NEW TOURNAMENT</Link></button>
            <h2>TOURNAMENTS</h2>
            {this.generateTournamentsList()}
          </div>
          <Footer/>
        </div>)

    } else { return <Redirect to="/error" /> };
  }


  render() {
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
