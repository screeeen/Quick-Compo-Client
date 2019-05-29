import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";
// import { Link } from 'react-router-dom'

function PlayerCell(props) {
  return (
      <div className="tournament-cell">
        <img src={props.img} alt='pic'/>
        <p>{props.name}</p>
        {props.score>0?<p>SCORE: {props.score}</p>:<p>NO SCORES YET</p>}
        
        {/* <p className="tournament-name">{props.position[0]}</p> */}
      </div>
  )
}
export default withAuth(PlayerCell)