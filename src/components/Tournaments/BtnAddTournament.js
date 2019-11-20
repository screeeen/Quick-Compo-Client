import React from 'react'
import { Link } from "react-router-dom";

export default function BtnAddTournament() {
  return (
    <div className="ribbon-wrap">
    <Link to={{ pathname: '/tournaments/add-tournament' }}>
              <button>ADD A NEW TOURNAMENT</button>
            </Link>
    </div>
  )
}
