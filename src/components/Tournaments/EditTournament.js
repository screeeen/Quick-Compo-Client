import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import calls from './../helpers/Calls'
import imageUploader from './../helpers/ImageUploader'

class EditTournament extends Component {
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
    calls.editTournament(this.state.tournamentId,this.state)
      .then((updatedTournament) => {
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
        <div className="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">EDIT TOURNAMENT</strong>
        </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="tournament-form-outline">
            <label>Name</label>
            <input type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)} />

            <input type="file" name="file" id="file" className="inputfile" onChange={this.fileOnchange} />
            <label htmlFor="file"><img className="tournament-image" src={this.state.img} alt='' disabled /></label>

            {this.state.disable ? <img className="tournament-image-small" src={this.state.img} alt='' disabled /> : null}
            {this.state.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
          </div>
        </form>
      </div>
    )
  }
}

export default withAuth(EditTournament);