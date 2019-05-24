import React, { Component } from 'react';

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

//helper handle for submit



  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmitAddPlayer}>
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