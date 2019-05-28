import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";
// import { Link } from 'react-router-dom'

function PlayerCell(props) {
  return (
    <div>
      <div className="tournament-cell">
        <img src={props.img} alt='pic' />
        <p className="tournament-name">{props.name}</p>
        {/* <Link to={{ pathname: "/tournaments/edit-player", state: props }}>
          <p>EDIT</p>
        </Link>
        <p>PLAYERS IN: {props.players.length}</p> */}
      </div>
    </div>
  )
}
export default withAuth(PlayerCell)