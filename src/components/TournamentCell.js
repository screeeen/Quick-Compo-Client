import React, { Component } from 'react'
import { Link } from "react-router-dom";

class TournamentCell extends Component {


  // generateListOfPlayers = (players, i) => {
  //   return players.map((oneItem, i) => {
  //     console.log('player', oneItem);
  //     const { name } = oneItem;
  //     console.log(name);
  //     return (
  //       <td key={i}>{name}</td>
  //     )
  //   })
  // }

  // generateListOfGames = (games, i) => {
  //   return games.map((oneGame, i) => {
  //     const { player1, player2 } = oneGame;
  //     // console.log('games', games[0]);
  //     // console.log(player1, player2);
  //     return (
  //       <p key={i}>{player1} vs. {player2}</p>
  //     )
  //   })
  // }


  render() {
    return (
      <div>
        <Link to={{pathname:"/tournaments/edit-tournament", state:this.props}}>
          <div className="tournament-cell">
          <img src={this.props.img} alt='pic'/>
          <p>{this.props.name}</p>
          <p>PLAYERS IN: {this.props.players.length}</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default TournamentCell;

