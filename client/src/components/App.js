import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { pollsFetch, fetchUser } from '../actions';
import PrivateRoute from './UserAuth/PrivateRoute';
import LandingPage from './LandingPage';
import Dashboard from './UserDashboard/Dashboard';
import LoginForm from './UserAuth/LoginForm';
import SignupForm from './UserAuth/SignupForm';

const history = createHistory();

class App extends Component {
  componentWillMount() {
    this.props.pollsFetch();
    this.props.fetchUser();
  }
  render() {
    console.log(this.props.auth);
    const { isAuthenticated } = this.props.auth;
    return (
      <MuiThemeProvider>
        <Router history={history}>
          <div>
            <Route path="/" component={LandingPage} />
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              authed={isAuthenticated}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth, polls: state.polls });

export default connect(mapStateToProps, { pollsFetch, fetchUser })(App);
