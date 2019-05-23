import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


class TournamentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    }
  }

  checkIfLogged = () => {
    if (this.state.loggedIn) {
      return (
        <div>
          <Navbar />
          <h1>tournaments page</h1>
          <Link to={"/games"}> games</Link>
          <Link to={"/players"}> players</Link>

        </div>)

    } else { return <Redirect to="/error" /> };
  }


  render() {
    return (<Route exact path="/tournaments" render={this.checkIfLogged} />)
  }
}

export default withAuth(TournamentList);
