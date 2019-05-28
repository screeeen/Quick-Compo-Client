import React from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'

function TournamentCell(props) {
  return (
    <div>
      <div className="tournament-cell">
          <img src={props.img} alt='pic' />
        <Link to={{ pathname: "/players", state: props }}>
          <p className="tournament-name">{props.name}</p>
        </Link>
        <p>PLAYERS IN: {props.players.length}</p>
        <Link to={{ pathname: "/tournaments/edit-tournament", state: props._id }}>
          <p>EDIT</p>
        </Link>
      </div>
    </div>
  )
}
export default withAuth(TournamentCell)

