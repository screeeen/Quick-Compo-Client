import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from './../../helpers/Calls';



class GameEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: props.location.state.tournament,
      player1Id: props.location.state.player1Id,
      player2Id: props.location.state.player2Id,
      player1Score: 0,
      player2Score: 0,
      redirect: false
    }
    console.log('game EDIT props ',props);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return this.props.history.go(-1);

      {/* <Redirect to={{pathname:'/games',state:{tournament:this.state.tournamen}}} /> */}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const  {player1Score , player2Score,player1Id,player2Id, tournament} = this.state;
    console.log('sendind: ',player1Score,player2Score,player1Id,player2Id,tournament);

    calls.modifyPlayer(player1Score,player1Id)
    .then((updatedScores) => {
      console.log('updatedScores', updatedScores);
      this.setState({ player1Score: 0 });
    })


    calls.modifyPlayer(player2Score,player2Id)
    .then((updatedScores) => {
      console.log('updatedScores', updatedScores);
      this.setState({ player2Score: 0, redirect: true });
    })
  }


  handleChange = (event) => {
    const { name,value } = event.target;
    // console.log('p  ',name,value);
    this.setState({ [name]:value });
    console.log('the state: ',this.state);
  }

  

  render() {
    // console.log(props.location.state.player1Score)
    return (
      <div>
      {this.renderRedirect()}
        <Navbar/>
      <h2>EDIT SCORES</h2>
        <form onSubmit={this.handleSubmit}>

          <p>{this.props.location.state.player1}</p>
          <input type="number"
            name="player1Score"
            value={this.state.player1Score}
            placeholder={this.state.player1Score}
            onChange={(e) => this.handleChange(e)} />

            <p>{this.props.location.state.player2}</p>
            <input type="number"
            name="player2Score"
            value={this.state.player2Score}
            placeholder={this.state.player2Score}
            onChange={(e) => this.handleChange(e)} />


            <button onClick={(e) => this.handleSubmit(e)}><input type="submit"></input></button>

        </form>


        <Footer />
      </div>
    )
  }
}

export default withAuth(GameEdit);
