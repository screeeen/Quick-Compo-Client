import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./lib/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import TournamentList from "./components/Tournaments/TournamentList";
import AddTournament from "./components/Tournaments/AddTournament.js";
import EditTournament from "./components/Tournaments/EditTournament";
import DeleteTournament from "./components/Tournaments/DeleteTournament";
import PlayersList from "./components/Tournaments/Players/PlayersList";
import GamesList from "./components/Tournaments/Games/GamesList";
import GameEdit from "./components/Tournaments/Games/GameEdit";
import Brackets from "./components/Brackets";
import LeaderBoardList from "./components/Tournaments/LeaderBoard/LeaderBoardList";


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
            <Navbar />
            <Switch>
              <AnonRoute exact path="/" component={Signup} />
              <AnonRoute exact path="/signup" component={Signup} />
              <AnonRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/tournaments" component={TournamentList} />
              <PrivateRoute exact path="/brackets" component={Brackets} />

              <PrivateRoute exact path="/tournaments/edit-tournament/:id" component={EditTournament} />
              <PrivateRoute exact path="/tournaments/add-tournament" component={AddTournament} />
              <PrivateRoute exact path="/tournaments/delete-tournament/:id" component={DeleteTournament} />
              <PrivateRoute exact path="/players" component={PlayersList} />
              <PrivateRoute exact path="/games" component={GamesList} />
              <PrivateRoute exact path="/game-edit" component={GameEdit} />
              <PrivateRoute exact path="/leaderboard" component={LeaderBoardList} />
            </Switch>
            <Footer tournament={this.props.currentTournament} />
          </div>
      </AuthProvider>
    );
  }
}

export default App;
