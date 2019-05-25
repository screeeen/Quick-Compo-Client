import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import calls from './helpers/Calls';


class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      position: -1,
      score: [],
      tournament: this.props.currentTournament,
      redirect: false
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/brackets' />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.handleFormSubmitAddPlayer(this.state)
      .then((data) => {
        this.setState({ name: "", img: "", redirect: true });
      })
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Player Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withAuth(AddPlayer);