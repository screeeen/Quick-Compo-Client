import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import TournamentList from "./components/TournamentList";
import PlayersList from "./components/PlayersList";
import GamesList from "./components/GamesList";

// import './App.css';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/tournaments" component={TournamentList} />
            <PrivateRoute path="/players" component={PlayersList}/>
            <PrivateRoute path="/games" component={GamesList}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
