import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import { Link } from 'react-router-dom'

class GamesCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: props.tournament,
    }
    // console.log('gamecell props ', props);
  }

  render() {
    return (
      <Link to={{ pathname: `/game-edit/`, state: { tournament: this.props.tournament.tournamentId, player1Id:this.props.player1Id, player2Id:this.props.player2Id, player1: this.props.player1, player2: this.props.player2, player1Score:this.props.player1Score, player2Score:this.props.player2Score  } }}>
        <div className="game-cell" >
          {(this.props.player1 && this.props.player2) ?
            <table >
              <tbody>
                <tr>
                  <td>{this.props.player1} </td>
                  <td></td>
                  <td>SCORE: {this.props.player1Score}</td>
                </tr>
                <tr>
                  <td>VS.</td>
                </tr>
                <tr>
                  <td>{this.props.player2}</td>
                  <td></td>
                  <td>SCORE: {this.props.player2Score}</td>
                </tr>
              </tbody>
            </table>
            :
            <p>NOT READY YET</p>
          }
        </div>
      </Link >
    )
  }
}
export default withAuth(GamesCell)