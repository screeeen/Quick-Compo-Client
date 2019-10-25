//form to enter player details: name and pic and hits the route to post the player

import React, { Component } from 'react';
import { withAuth } from "../../../lib/AuthProvider";
import calls from './../../helpers/Calls';
import imageUploader from './../../helpers/ImageUploader';
import { withRouter } from 'react-router-dom';
import uploadIcon from './../../../images/upload.svg';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      position: -1,
      score: 0,
      tournament: this.props.currentTournament,
      redirect: false,
      disable: true,
      uploadIcon: uploadIcon
    }
  }

  componentDidMount() {
    calls.getTournamentbyId(this.props.location.state.tournamentId)
      .then(res => {
        const { name, img, players, games, _id } = res.data;
        this.setState({ tournamentName: name, tournamentImage: img, tournamentPlayers: players, tournamentGames: games, tournamentId: _id });
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, img, position, score } = this.state;
    const { tournamentId } = this.props.location.state;

    calls.addPlayer({ name, img, position, score, tournamentId })
      .then((data) => {
        this.props.getPlayers();
        this.setState({ name: "", img: "", redirect: false });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fileOnchange = (event) => {
    const file = event.target.files[0];
    const uploadData = new FormData()
    uploadData.append('photo', file)

    imageUploader.uploadImage(uploadData)
      .then((img) => {
        this.setState({
          img,
          disable: false,
        })
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className="tournament-form" >
        <img src={this.props.img} alt='' />
        <div className="non-semantic-protector">
          <h1 className="ribbon">
            <strong className="ribbon-content">ADD A NEW PLAYER</strong>
          </h1>
        </div>

        <form className="tournament-form-outline" onSubmit={this.handleSubmit}>
          <label>ENTER THE PLAYERS </label>
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder='name of player'
            onChange={(e) => this.handleChange(e)} />
          <input type="file" name="file" id="file" className="inputfile" onChange={this.fileOnchange} />
          <label htmlFor="file">{this.state.disable ? <img className="tournament-image-small" src={uploadIcon} alt='Icon'/> : <img className="tournament-image-small" src={this.state.img} alt=''/>}</label>
          {this.state.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>
      </div>
    )
  }
}

export default withRouter(withAuth(AddPlayer));