//navbar with backbutton. The component state is stored in the props.history
// I find this a bit hacky, I guess this should be solved with a store

import React, { Component } from "react";
import { withRouter } from 'react-router'
import { withAuth } from "../lib/AuthProvider";

import backIcon from './../images/back.svg'
import userIcon from './../images/user.svg'

class Navbar extends Component {

  render() {
    const { user, isLoggedin } = this.props;
    return (
      <div className="nav-bar">
        <div>
          <img src={backIcon} alt='back' onClick={() => this.props.history.go(-1)} />
        </div>
        {isLoggedin ? (
          <div>
            <p>{user.username}</p>
          </div>
        ) : null
        }
        <div>
          <img src={userIcon} alt='user' />
        </div>
      </div>
    );
  }
}

const navbarWithRouter = withRouter(Navbar);
export default withAuth(navbarWithRouter);
