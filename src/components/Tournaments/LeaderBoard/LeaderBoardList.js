//players list sorted by scores

import React, { Component } from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import calls from '../../helpers/Calls';
import LeaderBoardCell from './LeaderBoardCell';
import TournamentLabels from './../TournamentLabels';
import Ribbon from './../../Ribbon';

class LeaderBoardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    calls.getPlayers()
      .then(res => {
        const players = res.data;
        this.setState({ players });
      }, () => { this.generateList() })
  }

  generateList = () => {
    return this.state.players.sort(function (a, b) { return b.score - a.score }).map((onePlayer, i) => {
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
      <div className="container-tournaments">
        <Ribbon name="HALL OF FAME" />
        <TournamentLabels secondTitle="player" seventhTitle="score" />
        <div className="games-tables">
          {this.generateList()}
        </div>
      </div>
    )
  }
}

export default withAuth(LeaderBoardList);