import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import { withAuth } from "../lib/AuthProvider";

import backIcon from './../images/back.svg'
import userIcon from './../images/user.svg'

class Navbar extends Component {



  render() {
    const { user, isLoggedin } = this.props;
    return (
      <div className="nav-bar">
        <button className="back-button" onClick={() => this.props.history.go(-1)}><img src={backIcon} alt='back' /></button>
        {isLoggedin ? (
          <div >
            <p>{user.username}</p>
          </div>
        ) : null
        }

        {/* {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )} */}
        <button className="back-button"><img src={userIcon} alt='user' /></button>

      </div>
    );
  }
}

const navbarWithRouter = withRouter(Navbar);
export default withAuth(navbarWithRouter);
