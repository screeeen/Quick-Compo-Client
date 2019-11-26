//Game edit, passes the deconstructed game to the state, ready to be edited, and hits PUT routes

import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import calls from './../../helpers/Calls';
import Ribbon from './../../Ribbon';

class GameEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: props.location.state.tournament,
      player1Id: props.location.state.player1Id,
      player2Id: props.location.state.player2Id,
      player1Img: props.location.state.player1Img,
      player2Img: props.location.state.player2Img,
      player1Score: 0,
      player2Score: 0,
      redirect: false
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return this.props.history.go(-1);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { player1Score, player2Score, player1Id, player2Id, tournament } = this.state;
    calls.modifyPlayer(player1Score, player1Id)
      .then((updatedScores) => {
        this.setState({ player1Score: 0 });
      })
    calls.modifyPlayer(player2Score, player2Id)
      .then((updatedScores) => {
        this.setState({ player2Score: 0, redirect: true });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container">
        <div className="container-tournaments">
          {this.renderRedirect()}
          <Ribbon name="edit scores" />
          <div className="">
            <form onSubmit={this.handleSubmit}>

              <img className="tournament-image-small" src={this.props.location.state.player1Img} alt='' />
              <p>{this.props.location.state.player1}</p>
              <input type="number"
                name="player1Score"
                value={this.state.player1Score}
                placeholder={this.state.player1Score}
                onChange={(e) => this.handleChange(e)} />
                
              <img className="tournament-image-small" src={this.props.location.state.player2Img} alt='' />
              <p>{this.props.location.state.player2}</p>
              <input type="number"
                name="player2Score"
                value={this.state.player2Score}
                placeholder={this.state.player2Score}
                onChange={(e) => this.handleChange(e)} />

              <button onClick={(e) => this.handleSubmit(e)}><input type="submit"></input></button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(GameEdit);
