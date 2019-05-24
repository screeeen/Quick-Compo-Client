import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios';


 class PlayersListBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      tournaments: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        const tournaments = res.data;
        this.setState({ tournaments });
      })
  }


  render() {
    return (
      <div>

        
      </div>
    )
  }
}

export default withAuth(PlayersListBlock);
