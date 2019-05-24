import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from './../components/Navbar';
import calls from './../components/helpers/Calls'
import './AddTournamentPage.css'


class AddTournamentPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
      players: [],
      games: [],
      redirect: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const { name, img } = this.state;
    calls.handleFormSubmitAddTournament(this.state)
      .then((newTournament) => {

        this.props.setCurrentTournament(newTournament.data._id, 'set');
        console.log('setting the tournament id', this.props);
        this.setState({ name: "", img: "", redirect: true });
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/players' />
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Navbar />
        <h1>Start a Compo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)} />

          {/* //IMAGE HERE */}

          <input type="submit" value="Submit" />
        </form>


      </div>
    )
  }
}

export default withAuth(AddTournamentPage);
