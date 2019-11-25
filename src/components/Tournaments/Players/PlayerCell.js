//component to display the player

import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";

function PlayerCell(props) {
  return (
    <div className="tournament-cell">
      <div className="tournament-cell-section" >
        <img src={props.img} alt='pic' />
      </div>
      <div className="tournament-cell-section" >
        <p>{props.name}</p>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div className="tournament-cell-section" >
        <p>{props.score}</p>
      </div>
    </div>
  )
}
export default withAuth(PlayerCell)