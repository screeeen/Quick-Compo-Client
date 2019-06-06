import React, { Component } from 'react';
import { withAuth } from "../../../lib/AuthProvider";
import calls from './../../helpers/Calls';
import imageUploader from './../../helpers/ImageUploader'
import uploadIcon from './../../../images/upload.svg'
import { withRouter } from 'react-router-dom'



class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: uploadIcon,
      position: -1,
      score: 0,
      tournament: this.props.currentTournament,
      redirect: false,
      disable: false
    }
  }

  componentDidMount() {
    calls.getTournamentbyId(this.props.location.state.tournamentId)
      .then(res => {
        console.log('res ', res);
        const { name, img, players, games, _id } = res.data;
        console.log(res.data);
        this.setState({ tournamentName: name, tournamentImage: img, tournamentPlayers: players, tournamentGames: games, tournamentId: _id });
        console.log('updated state', this.state);
      })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, img, position, score } = this.state;
    const { tournamentId } = this.props.location.state;
    console.log("");

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
        {/* <div className="tournament-tally">
          <img className="tournament-image-small" src={this.state.tournamentImage} alt='' />
          <h2>{this.props.tournamentName}</h2>
        </div> */}

        <div class="non-semantic-protector"> 
        <h1 className="ribbon">
          <strong className="ribbon-content">ADD A NEW PLAYER</strong>
        </h1>
        </div>
        <form className="tournament-form-outline" onSubmit={this.handleSubmit}>
          {/* <label>Player Name</label> */}
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder='name of player'
            onChange={(e) => this.handleChange(e)} />
            <input type="file" name="file" id="file" className="inputfile" onChange={this.fileOnchange} />
            <label htmlFor="file"><img className="tournament-image" src={this.state.img} alt='' disabled /></label>     
          {this.disable ? <img src={this.state.img} alt='' disabled /> : null}
          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}
        </form>

      </div>
    )
  }
}

export default withRouter(withAuth(AddPlayer));