import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import TournamentList from "./components/TournamentList";
import AddTournamentPage from"./components/AddTournamentPage";
import PlayersListPage from "./components/PlayersListPage";
import GamesList from "./components/GamesList";
import Brackets  from "./components/Brackets";

// import './App.css';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <AnonRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/tournaments" component={TournamentList} />
            <PrivateRoute exact path="/brackets" component={Brackets} />

            <PrivateRoute exact path="/tournaments/add-tournament" component={AddTournamentPage} />
            <PrivateRoute exact path="/players" component={PlayersListPage} />
            <PrivateRoute exact path="/games" component={GamesList} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
