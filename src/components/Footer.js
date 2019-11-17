//footer bar hitting routes for pages, tournaments and leaderboard


import React, { Component } from 'react'
import { Link } from "react-router-dom";
import badgeIcon from './../images/badge.svg'
// import pitchIcon from './../images/pitch.svg'
import basketIcon from './../images/basket.svg'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tournament: this.props.tournament
    }
  }

  render() {
    return (
      <div className="footer" >
        <div className="footer-button">
          <Link to={{ pathname: '/tournaments' }}>
            <img src={basketIcon} alt='sports' />
          </Link>
        </div>
        <div className="footer-button">
          <Link to={{ pathname: '/leaderboard' }}>
            <img src={badgeIcon} alt='user' />
          </Link>
        </div>
      </div>
    )
  }
}

export default Footer;