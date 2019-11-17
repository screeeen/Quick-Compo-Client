//displays one cell

import React from 'react'
import { withAuth } from "../../lib/AuthProvider";
import { Link } from 'react-router-dom'

function TournamentCell(props) {
  return (
    <div>
      <div className="tournament-cell">
        <div className="tournament-cell-section">
          <img src={props.img} alt='pic' />
        </div>
        <div className="tournament-cell-section" >
          <Link to={{ pathname: `/players`, state: { tournamentId: props._id } }}>
          <p>{props.name}</p> 
          </Link>
        </div>
        <div className="tournament-cell-section">
        <p>{props.players.length}</p> 
        </div>
        <div className="tournament-cell-section">
          <Link to={{ pathname: `/tournaments/edit-tournament/${props._id}`, state: { tournamentId: props._id } }}>
            <p>EDIT</p> 
          </Link>
        </div>
        <div className="tournament-cell-section">
          <Link to={{ pathname: `/tournaments/delete-tournament/${props._id}`, state: { tournamentId: props._id } }}>
            <p>DEL</p> 
          </Link>
        </div>
      </div>
    </div >
  )
}
export default withAuth(TournamentCell)

