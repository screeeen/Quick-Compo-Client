import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import calls from '../helpers/Calls'
import Ribbon from './../Ribbon';

class DeleteTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      players: [],
      games: [],
      redirect: false,
      tournamentId: props.location.state
    }
  }

  componentDidMount() {
    calls.getTournamentbyId(this.props.location.state.tournamentId)
      .then(res => {
        const {name,img,players,games,_id} = res.data;
        this.setState({ name,img,players,games,tournamentId:_id });
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.deleteTournament(this.state.tournamentId,this.state)
      .then((updatedTournament) => {
        this.setState({ name: "", img: "", redirect: true });
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/tournaments' />
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderRedirect()}
        <Ribbon name="DELETE TOURNAMENT" />

        <form onSubmit={this.handleSubmit}>
          <div className="tournament-form-outline">
            <label>Tournament Name:</label>
            <label>{this.state.name}</label>
            <label htmlFor="file"><img className="tournament-image" src={this.state.img} alt='' /></label>
            <img className="tournament-image-small" src={this.state.img} alt='' />
            <button className="button red-bg" type="submit">delete</button>
            <p>Warning! you will lose your data</p>
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(DeleteTournament);