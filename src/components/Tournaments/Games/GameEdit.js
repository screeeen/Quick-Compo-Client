import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
// import calls from './../../helpers/Calls';



class GameEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournament: props.tournament,
      player1Score:0,
      player2Score:0
    }
    console.log('game EDIT props ',props);
  }


  handleChange = (event) => {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Navbar/>

      <h2>EDIT SCORES</h2>
        <form onSubmit={this.handleSubmit}>

          <p>{this.props.location.state.player1}</p>
          <input type="number"
            name="score"
            value={this.props.location.state.player1Score}
            placeholder={this.props.location.state.player1Score}
            onChange={(e) => this.handleChange(e)} />

            <p>{this.props.location.state.player2}</p>
            <input type="number"
            name="score"
            value={this.props.location.state.player1Score}
            placeholder={this.props.location.state.player1Score}
            onChange={(e) => this.handleChange(e)} />


            <button><input type="submit"></input></button>

        </form>


        <Footer />
      </div>
    )
  }
}

export default withAuth(GameEdit);
