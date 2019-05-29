import React from 'react'
import { withAuth } from "../../../lib/AuthProvider";
// import { Link } from 'react-router-dom'

function GamesCell(props) {
  return (
    <div className="game-cell">
        {(props.player1 && props.player2) ?
      <table >
        <tbody>
          <tr>
            <td>{props.player1} </td>
            <td></td>
            <td>50</td>
          </tr>
          <tr>
            <td>VS.</td>
          </tr>
          <tr>
            <td>{props.player2}</td>
            <td></td>
            <td>94</td>
          </tr>
          </tbody>
      </table>
          :
            <p>NOT READY YET</p>
            }
 
    </div>
              )
            }
export default withAuth(GamesCell)