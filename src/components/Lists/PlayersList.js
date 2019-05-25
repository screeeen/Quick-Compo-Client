import React, { Component } from 'react'
import { withAuth } from "../../lib/AuthProvider";
import axios from 'axios';


 class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      playersIntoTournament: []
    }
  }

  componentDidMount() {
    // console.log('id fuck',this.props);
    axios.get(`http://localhost:5000/api//players/intoTournament/${this.props.currentTournament}`)
      .then(res => {
        const tournaments = res.data;
        // console.log('res.data in player list',res.data);
        // console.log('state in players list',this.state);
        this.setState({ tournaments });
        // console.log('state in players list AFTER',this.state);
      })
  }

  generatePlayersList(){
    return this.state.playersIntoTournament.forEach((onePlayer)=>{
       const {name,img,position,score} = onePlayer;
       return (
         <p>´{name}</p>
       )
    })
  }


  render() {
    return (
      <div>
        {this.generatePlayersList()}
      </div>
    )
  }
}

export default withAuth(PlayersList);
