// component to edit the tournament
// from the lifecycle method retrieves the current tournament.
// the id of this tournament is stored in the location.state (I find this very sketchy), so I can call via GET/ with param :id
//  this tournament is passed to the state. The form is populated with the loaded state
// when edited, the tournament is sent and modified in the server via PUT

import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import calls from '../helpers/Calls'
import imageUploader from '../helpers/ImageUploader'

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
        <div class="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">DELETE TOURNAMENT</strong>
        </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="tournament-form-outline">
            <label>{this.state.name}</label>

            {/* <input type="file" name="file" id="file" className="inputfile" onChange={this.fileOnchange} /> */}
            <label htmlFor="file"><img className="tournament-image" src={this.state.img} alt='' disabled /></label>

            {this.state.disable ? <img className="tournament-image-small" src={this.state.img} alt='' disabled /> : null}
            {this.state.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(DeleteTournament);