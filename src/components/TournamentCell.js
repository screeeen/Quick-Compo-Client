import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TournamentCell extends Component {


  generateListOfPlayers = (players, i) => {
    return players.map((oneItem, i) => {
      console.log('player', oneItem);
      const { name } = oneItem;
      console.log(name);
      return (
        <td key={i}>{name}</td>
      )
    })
  }

  generateListOfGames = (games, i) => {
    return games.map((oneGame, i) => {
      const { player1, player2 } = oneGame;
      // console.log('games', games[0]);
      // console.log(player1, player2);
      return (
        <p key={i}>{player1} vs. {player2}</p>
      )
    })
  }


  render() {
    return (
      <div className="tournament-cell">
        <Link to="/tournaments/edit-tournament">
          {/* <img src={this.props.img}/> */}
          <p>{this.props.name}</p>
          {/* {this.generateListOfPlayers(this.props.players)} */}
          {/* {this.generateListOfGames(this.props.games)} */}
        </Link>
      </div>
    )
  }
}

export default TournamentCell;

