import React, { Component } from 'react'

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
        <td key={i}>{player1} vs. {player2}</td>
      )
    })
  }


  render() {
    return (
          <tr>
            <td>{this.props.name}</td>
            <td>{this.props.img}img here</td>
            {/* {this.generateListOfPlayers(this.props.players)} */}
            {this.generateListOfGames(this.props.games)}
          </tr>
    )
  }
}

export default TournamentCell;

