import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class AddPlayerBlock extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
      position: [],
      score:[],
      tournament: '',
      redirect: false
    }
  }

//   renderRedirect = () => {
//     if (this.state.redirect) {
//     return <Redirect to='/brackets' />
//     }
// }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, img , tournamentId } = this.state;

    axios.post("http://localhost:5000/api/players/add-player", { name, img })
      .then(() => {
        this.setState({ name: "", img: "",redirect:true });
        // this.renderRedirect();
      })
      .catch((err) => console.log(err))    
  }



  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Player Name</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddPlayerBlock;