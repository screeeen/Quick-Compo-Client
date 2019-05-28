import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';
import calls from './helpers/Calls'
import imageUploader from './helpers/ImageUploader'


class AddTournament extends Component {
  constructor(props) {
    super(props);
    console.log('ADD TOURNAMENT props: ', props);
    this.state = {
      name: '',
      img: '',
      players: [],
      games: [],
      redirect: false,
      disable: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.handleFormSubmitAddTournament(this.state)
      .then((newTournament) => {
        this.props.setCurrentTournament(newTournament.data._id, newTournament.data.name, 'set');
        this.setState({ name: "", img: "", redirect: true });
      })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{pathname:'/players', state:this.state}} />
      // return <Redirect to='/players' />
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
      <div>
        {this.renderRedirect()}
        <Navbar />
        <h2>NEW TOURNAMENT</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)} />
          <input type="file" onChange={this.fileOnchange}></input>
          
          {this.disable ? <img src={this.state.img} alt=''  disabled /> : <img className="tournament-image" src={this.state.img} alt='' disabled />}
          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>
      </div>
    )
  }
}

export default withAuth(AddTournament);
