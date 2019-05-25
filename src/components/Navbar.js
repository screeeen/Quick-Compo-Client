import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import { withAuth } from "../lib/AuthProvider";



class Navbar extends Component {



  render() {
    const { user, isLoggedin } = this.props;
    return (
      <div className='navBar'>
      <button onClick={() => this.props.history.go(-1)}>go back </button>
        {/* <p className="pageTitle">name of the page</p> */}
        {isLoggedin ? (
          <p>{user.username}</p>
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
