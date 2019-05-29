import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";
// import { Link } from 'react-router-dom'

function GamesCell(props) {
  return (
      <div className="game-cell">
      { (props.player1 && props.player2)?
        <p>{props.player1} VS. {props.player2}</p>:
        <p>NOT READY YET</p>
        }
        {
        props.winner !==-1?<p>WINNER: </p>:<p>NOT PLAYED</p>
        }        
      </div>
  )
}
export default withAuth(GamesCell)