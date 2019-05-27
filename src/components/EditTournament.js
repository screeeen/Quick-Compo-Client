import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';
import calls from './helpers/Calls'
import imageUploader from './helpers/ImageUploader'


class EditTournament extends Component {
  constructor(props) {
    super(props);
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
    console.log('event: ',event);
    calls.handleFormSubmitEditTournament(`${this.props.setCurrentTournament}`)
      .then((newTournament) => {
        this.props.setCurrentTournament(newTournament.data._id,newTournament.name, 'set');
        this.setState({ name: "", img: "", redirect: true });
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/tournaments' />
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
    console.log('shit', uploadData, file);

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
    console.log('edit tour props;: ',this.props);
    return (
      <div className="container">
        {this.renderRedirect()}
        <Navbar />
        <h2>EDIT TOURNAMENT</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder={this.props.name}
            onChange={(e) => this.handleChange(e)} />
          <input type="file" onChange={this.fileOnchange}></input>
          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>


      </div>
    )
  }
}

export default withAuth(EditTournament);