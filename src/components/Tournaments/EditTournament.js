import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Redirect } from "react-router-dom";
import Navbar from './../Navbar';
import Footer from '../Footer';
import calls from './../helpers/Calls'
import imageUploader from './../helpers/ImageUploader'


class EditTournament extends Component {
  constructor(props) {
    super(props);
    console.log('EDIT TOURNAMENT props: ', props);

    this.state = {
      name: '',
      img: '',
      players: [],
      games: [],
      redirect: false,
      tournamentId: props.location.state
    }
    console.log('EDIT TOURNAMENT state: ', this.state);
  }

  componentDidMount() {
    console.log(this.state.tournamentId);
  
    calls.getTournamentbyId(this.props.location.state.tournamentId)
      .then(res => {
        const {name,img,players,games,_id} = res.data;
        this.setState({ name,img,players,games,tournamentId:_id });
        console.log('updated state',this.state);
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    calls.editTournament(this.state.tournamentId,this.state)
      .then((updatedTournament) => {
        console.log('new torunament', updatedTournament);
        // this.props.setCurrentTournament(updatedTournament.data._id, updatedTournament.name, 'set');
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
    return (
      <div>
        {this.renderRedirect()}
        <Navbar />
        <h2>EDIT TOURNAMENT</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder={this.state.name}
            onChange={(e) => this.handleChange(e)} />
          <input type="file" onChange={this.fileOnchange}></input>
                
          {this.disable ? <img src={this.state.img} alt=''  disabled /> : <img className="tournament-image" src={this.state.img} alt='' disabled />}
          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>
        <Footer/>


      </div>
    )
  }
}

export default withAuth(EditTournament);