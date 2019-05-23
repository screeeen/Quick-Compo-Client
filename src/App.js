import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import TournamentList from "./components/TournamentList";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <TournamentList path="/tournament" component={TournamentList} />
            <PlayersList path="/players" component={PlayersList}/>
            <GamesList path="/games" component={GamesList}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
