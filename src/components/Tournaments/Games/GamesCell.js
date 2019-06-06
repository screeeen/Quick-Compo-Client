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
      <Link to={{ pathname: `/game-edit/`, state: { tournament: this.props.tournament.tournamentId, player1Id: this.props.player1Id, player2Id: this.props.player2Id, player1: this.props.player1, player2: this.props.player2, player1Score: this.props.player1Score, player2Score: this.props.player2Score, player1Img: this.props.player1Img, player2Img: this.props.player2Img } }}>
        <div className="game-cell" >
          {(this.props.player1 && this.props.player2) ?
            <div>
              <div className="player-card">
                <p>{this.props.player1}</p><img className="tournament-image-small" src={this.props.player1Img} alt='' />
                <h2>VS.</h2>
                <img className="tournament-image-small" src={this.props.player2Img} alt='' /><p>{this.props.player2}</p>
                  </div>
                <div className="gap"></div>
                <div className="player-card scores-line">
                <p>SCORE: {this.props.player1Score}</p><p>SCORE: {this.props.player2Score}</p>
              </div>
            </div>
            :
            <p>NOT READY YET</p>
          }
        </div>
      </Link >
    )
  }
}
export default withAuth(GamesCell)