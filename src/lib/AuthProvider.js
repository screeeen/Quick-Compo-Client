import React, { Component } from "react";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {value => {
            return (
              <Comp
                currentTournament={value.currentTournament}
                currentTournamentName={value.currentTournamentName}
                setCurrentTournament={value.setCurrentTournament}
                login={value.login}
                signup={value.signup}
                user={value.user}
                logout={value.logout}
                isLoggedin={value.isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true,
    currentTournament: undefined,
    currentTournamentName: ''
  };

  setCurrentTournament = (id, name, action) => {
    if (action === 'set') {
      this.setState({ currentTournament: id, currentTournamentName: name });
    } else if (action === 'clear') {
      this.setState({ currentTournament: undefined, currentTournamentName: '' });
    }
  }

  componentDidMount() {
    auth
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }

  signup = user => {
    const { username, password } = user;
    auth
      .signup({ username, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
      });
  };

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        this.setState({
          isLoggedin: true,
          user
        });
      })
      .catch(() => { });
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null
        });
      })
      .catch(() => { });
  };
  render() {
    const { isLoading, isLoggedin, user, currentTournament, currentTournamentName } = this.state;
    return isLoading ? (
      <div>Loading</div>
    ) : (
        <Provider
          value={{
            isLoggedin,
            user,
            currentTournament,
            currentTournamentName,
            setCurrentTournament: this.setCurrentTournament,
            login: this.login,
            logout: this.logout,
            signup: this.signup
          }}
        >
          {this.props.children}
        </Provider>
      );
  }
}

export default AuthProvider;
