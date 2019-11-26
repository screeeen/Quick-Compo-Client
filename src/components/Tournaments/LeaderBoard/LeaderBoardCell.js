// list of sorted scores

import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";
import { Link } from 'react-router-dom'

function LeaderBoardCell(props) {
  console.log("leaderboardcell props",props);
  return (
    <div>
      <div className="tournament-cell">
        <img src={props.img} alt='pic' />
        {/* <Link to={{ pathname: `/players`, state: {tournamentId: props._id} }}> */}
          <p className="tournament-name">{props.name}</p>
        {/* </Link> */}
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p className="tournament-name">{props.score}</p>
      </div>
    </div>
  )
}
export default withAuth(LeaderBoardCell)