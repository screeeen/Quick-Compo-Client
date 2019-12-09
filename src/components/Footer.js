import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall, faTrophy } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tournament: this.props.tournament,
      disable: false,
    }
    console.log("footer state", this.state);
  }

  toggleCompetitionButton = () => {
    this.state.disable ?
      this.setState({ disable: false }) :
      this.setState({ disable: true })
  }


  render() {
    return (
      <div className="footer" >
        <Link to={{ pathname: `/tournaments` }} onClick={this.toggleCompetitionButton}>
          {!this.state.disable ? <FontAwesomeIcon icon={faBasketballBall} className="fa-2x" color="white" /> : <FontAwesomeIcon icon={faBasketballBall} className="fa-2x" color="grey" />}
        </Link>

        {/* {this.state.disable ?
          <Link to={{ pathname: `/players`, state: { tournamentId: this.props.tournament.tournamentId } }}>
            <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="white" />
          </Link> :
          <></>} */}

        <Link to={{ pathname: `/leaderboard` }} onClick={this.toggleCompetitionButton}>
        {this.state.disable ? <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="white" /> : <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="grey" />} 
        </Link>

      </div>
    )
  }
}

const footerWithRouter = withRouter(Footer);
export default withAuth(footerWithRouter);