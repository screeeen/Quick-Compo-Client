import React, { Component } from 'react'
import axios from 'axios';
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';
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

  renderRedirect = () => {
    if (this.state.redirect) {
    return <Redirect to='/tournaments' />
    }
}

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, img } = this.state;

    axios.post("http://localhost:5000/api/tournaments/add-tournament", { name, img })
      .then(() => {
        this.setState({ name: "", img: "",redirect:true });
        this.renderRedirect();
      })
      .catch((err) => console.log(err))    
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
        <h1>hello im add tournmanet</h1>
        <form onSubmit={this.handleFormSubmit}>

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
