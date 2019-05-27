import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";
import calls from './helpers/Calls';


class AddPlayer extends Component {
  constructor(props) {
    super(props);
    console.log('this props in add player: ', props);
    this.state = {
      name: '',
      img: '',
      position: -1,
      score: [],
      tournament: this.props.currentTournament,
      redirect: false
    }
  }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/brackets' />
  //   }
  // }

  // renderRefresh = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/players' />
  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.handleFormSubmitAddPlayer(this.state)
    .then((data) => {
      this.props.getPlayers();
      this.setState({ name: "", img: "", redirect: false });
    })
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <h2>---{this.props.currentTournamentName}---</h2>
        <h2>ADD A NEW PLAYER</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <label>Player Name</label> */}
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder='name of player'
            onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withAuth(AddPlayer);