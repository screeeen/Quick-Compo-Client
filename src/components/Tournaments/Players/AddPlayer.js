import React, { Component } from 'react';
import { withAuth } from "../../../lib/AuthProvider";
import calls from './../../helpers/Calls';
import imageUploader from './../../helpers/ImageUploader'
import userIcon from './../../../images/user.svg'


class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: userIcon,
      position: -1,
      score: [],
      tournament: this.props.currentTournament,
      // tournamentId: props.location.state,
      redirect: false,
      disable: false
    }
    console.log('PLAYER state: ', this.state);
    console.log('PLAYER props: ', props);
  }

  componentDidMount() {
    // let id = undefined;
    // this.props.currentTournament? id = this.props.currentTournament : id = this.props.location.state.id;
    calls.getTournamentbyId(this.state.tournament)
      .then(res => {
        const { name, img, players, games, _id } = res.data;
        console.log(res.data);
        this.setState({ tournamentName: name, tournamentImage: img, tournamentPlayers: players, tournamentGames: games, tournamentId: _id });
        console.log('updated state', this.state);
      })

  }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/brackets' />
  //   }
  // }

  // renderRefresh = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/players' />
  //   }
  // }


  handleSubmit = (event) => {
    event.preventDefault();
    calls.handleFormSubmitAddPlayer(this.state)
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
      <div>
        <img src={this.props.img} alt='' />
        <div className="tournament-tally">
          <img className="tournament-image-small" src={this.state.tournamentImage} alt='' />
          <h2>{this.props.currentTournamentName}</h2>
        </div>

        <h2>ADD A NEW PLAYER</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <label>Player Name</label> */}
          <input type="text"
            name="name"
            value={this.state.name}
            placeholder='name of player'
            onChange={(e) => this.handleChange(e)} />
          <input type="file" onChange={this.fileOnchange}></input>
          {this.disable ? <img src={this.state.img} alt='' disabled /> : <img className="tournament-image" src={this.state.img} alt='' disabled />}
          {this.disable ? <input type="submit" disabled></input> : <input type="submit"></input>}        </form>
      </div>
    )
  }
}

export default withAuth(AddPlayer);