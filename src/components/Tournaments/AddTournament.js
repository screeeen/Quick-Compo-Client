// form for the tournament details and sends the tournament object to the server, ready to be populated. 

import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import calls from './../helpers/Calls'
import imageUploader from './../helpers/ImageUploader'
import Ribbon from './../Ribbon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

class AddTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      players: [],
      games: [],
      redirect: false,
      disable: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.handleFormSubmitAddTournament(this.state)
      .then((newTournament) => {
        this.setState({ name: "", img: "", redirect: true });
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: '/tournaments', state: this.state }} />
    }
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
      <div className="container">
        {this.renderRedirect()}
        <Ribbon name="ADD NEW TOURNAMENT" />

        <form className="tournament-form-outline" onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            placeholder="your team name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)} />

          
          <input type="file" name="file" id="file" className="inputfile" onChange={this.fileOnchange} />
          <label htmlFor="file" className="inputfile-icon"><FontAwesomeIcon  className="inputfile-icon fa-3x" icon={faUpload} /><img className="tournament-image" src={this.state.img} alt='' disabled /></label>

          {this.state.disable ? <FontAwesomeIcon  className="inputfile-icon fa-3x" icon={faUpload} disabled /> : <FontAwesomeIcon  className="inputfile-icon fa-3x" icon={faUpload} />}
          {this.state.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>
      </div>
    )
  }
}

export default withAuth(AddTournament);
