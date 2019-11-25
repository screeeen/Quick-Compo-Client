//footer bar hitting routes for pages, tournaments and leaderboard


import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall,faTrophy } from '@fortawesome/free-solid-svg-icons';

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
        {/* <div className="footer-button"> */}
          <Link to={{ pathname: '/tournaments' }}>
          <FontAwesomeIcon icon={faBasketballBall} className="fa-2x" color="white"/>
          </Link>
        {/* </div> */}
        {/* <div className="footer-button"> */}
          <Link to={{ pathname: '/leaderboard' }}>
          <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="white"/>
          </Link>
        
      </div>
    )
  }
}

export default Footer;