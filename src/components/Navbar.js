import React, { Component } from "react";
import { withRouter } from 'react-router'
import { withAuth } from "../lib/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft,faUser } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {

  render() {
    const { user, isLoggedin } = this.props;
    return (
      <div className="nav-bar">
        <div>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} color="white" className="fa-2x" onClick={() => this.props.history.go(-1)} />
        </div>
        {isLoggedin ? (
          <div>
            <p>{user.username}</p>
          </div>
        ) : null
        }
        <div>
          <FontAwesomeIcon icon={faUser} className="fa-2x" color="white"/>
        </div>
      </div>
    );
  }
}

const navbarWithRouter = withRouter(Navbar);
export default withAuth(navbarWithRouter);
