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
    this.setState({ disable: false });
  }

  render() {
    return (
      <div className="footer" >
        <Link to={{ pathname: `/tournaments` }}>
          <FontAwesomeIcon icon={faBasketballBall} className="fa-2x" color="white" />
        </Link>

        {/* {this.state.disable ?
          <Link to={{ pathname: `/players`, state: { tournamentId: this.props.tournament.tournamentId } }}>
            <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="white" />
          </Link> :
          <></>} */}

        <Link to={{ pathname: `/leaderboard` }}>
          <FontAwesomeIcon icon={faTrophy} className="fa-2x" color="white" />
        </Link>

      </div>
    )
  }
}

const footerWithRouter = withRouter(Footer);
export default withAuth(footerWithRouter);