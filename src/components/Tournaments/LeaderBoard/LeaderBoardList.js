import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import calls from '../../helpers/Calls';
import LeaderBoardCell from './LeaderBoardCell';

class LeaderBoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players:[]
    }
  }

  componentDidMount() {
    this.refreshList();
    console.log('Leaderboard props', this.props);

  }

  refreshList = () => {
    calls.getPlayers()
      .then(res => {
        const players = res.data;
        console.log('players???? ',players);
        this.setState({ players });
      }, () => { this.generateList() })
  }

  generateList = () => {
    // console.log('my players', this.state.players);
    return this.state.players.sort(function(a, b){return b.score - a.score}).map((onePlayer, i) => {

      const { name, img, score } = onePlayer;

      return (
        <LeaderBoardCell
          key={i}
          name={name}
          img={img}
          score={score}
        />
      )
    })
  }


  render() {
    return (
      <div>
        <Navbar />
        <h2>HALL OF FAME</h2>
        <div className="games-tables">
          {this.generateList()}
        </div>
        <Footer tournament={this.props.currentTournament}/>
      </div>
    )
  }
}

export default withAuth(LeaderBoardList);