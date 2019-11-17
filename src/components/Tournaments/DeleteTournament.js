import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import calls from '../helpers/Calls'

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
    console.log("delete tournament",this.state); 
  }

  componentDidMount() {
    calls.getTournamentbyId(this.props.location.state.tournamentId)
      .then(res => {
        const {name,img,players,games,_id} = res.data;
        this.setState({ name,img,players,games,tournamentId:_id });
      })
      console.log("hola DELETE COMPONENT"); 
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
        <div className="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">DELETE TOURNAMENT</strong>
        </h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="tournament-form-outline">
            <label>{this.state.name}</label>
            <label htmlFor="file"><img className="tournament-image" src={this.state.img} alt='' /></label>
            <img className="tournament-image-small" src={this.state.img} alt='' />
            <input type="submit"></input> : <input type="submit"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(DeleteTournament);