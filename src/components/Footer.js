import React, { Component } from 'react'
import { Link } from "react-router-dom";

import badgeIcon from './../images/badge.svg'
import pitchIcon from './../images/pitch.svg'
import basketIcon from './../images/basket.svg'



class Footer extends Component {

  constructor(props){
    super(props);
    this.state={
      tournament: this.props.tournament
    }
    console.log('footer props', props);
  }

  render() {
    return (
      <div className="footer" >

        <div className="footer-button">
          <Link to={{ pathname: '/tournaments' }}>
            <img src={basketIcon} alt='sports' />Tournaments
        </Link>
        </div>

        <div className="footer-button">
        <Link to={{ pathname: '/games' }}>
            <img src={pitchIcon} alt='user' />Games
        </Link>
        </div>

        <div className="footer-button">
          <Link to={{ pathname: '/leaderboard'}}>

            <img src={badgeIcon} alt='user' />Users
        </Link>
        </div>


        </div>
    )
  }
}

export default Footer;