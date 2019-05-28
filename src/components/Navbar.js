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
      <div className='navBar'>
        <button className="back-button" onClick={() => this.props.history.go(-1)}><img src={backIcon} alt='back' /></button>
        {/* <p className="pageTitle">{this.constructor.name}</p> */}
        {isLoggedin ? (
          <div className="userDiv">
            <p>{user.username}</p>
            <img className="userPic" src={userIcon} alt='user' />
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
      </div>
    );
  }
}

const navbarWithRouter = withRouter(Navbar);
export default withAuth(navbarWithRouter);
