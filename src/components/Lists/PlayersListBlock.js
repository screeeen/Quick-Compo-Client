import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
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
    console.log('id fuck',this.props);
    axios.get(`http://localhost:5000/api//players/intoTournament/${this.props.currentTournament}`)
      .then(res => {
        const tournaments = res.data;
        console.log('res.data',res.data);
        console.log('tournaments',this.tournaments);
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
