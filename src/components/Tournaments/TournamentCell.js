import React from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom'

function TournamentCell(props) {
  return (
    <div>
      <div className="tournament-cell">
        <div className="tournament-cell-pic">
          <img src={props.img} alt='pic' />
        </div>
        <Link to={{ pathname: `/players`, state: { tournamentId: props._id } }}>
          <p className="tournament-name">{props.name}</p>
        </Link>

        <p>PLAYERS IN: {props.players.length}</p>

        <Link to={{ pathname: `/tournaments/edit-tournament/${props._id}`, state: { tournamentId: props._id } }}>
          <p>EDIT</p>
        </Link>

      </div>
    </div >
  )
}
export default withAuth(TournamentCell)

