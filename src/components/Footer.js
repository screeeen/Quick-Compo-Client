import React, { Component } from 'react'
import { Link } from "react-router-dom";

import sportsIcon from './../images/sports.svg'
import userIcon from './../images/user.svg'

class Footer extends Component {

  render() {
    return (
      <div className="footer" >
        <div className="footer-button">
          <Link to={{ pathname: '/Tournaments' }}>
            <img src={sportsIcon} alt='sports' />Tournaments
        </Link>
        </div>
        <div className="footer-button">

          <Link to={{ pathname: '/Tournaments' }}>
            <img src={userIcon} alt='user' />Users
        </Link>
        </div>
        <div className="footer-button">

          <Link to={{ pathname: '/Players', state: this.props.currentTournament }}>
            <img src={userIcon} alt='user' />Games
        </Link>
        </div>
      </div>
    )
  }
}

export default Footer;