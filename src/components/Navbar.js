import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './Navbar.css';



class Navbar extends Component {



  render() {
    const { user, isLoggedin } = this.props;
    return (
      <div className='divStyle'>
        <Link to={"/"}> previous </Link>
        <p>name of the page</p>
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

export default withAuth(Navbar);
