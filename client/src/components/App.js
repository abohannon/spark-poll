import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import { pollsFetch, fetchUser } from '../actions';
import PrivateRoute from './UserAuth/PrivateRoute';
import LandingPage from './LandingPage';
import PollPage from './PollPage';
import Dashboard from './UserDashboard/';

const history = createHistory();

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    pollsFetch: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.pollsFetch();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              authed={isAuthenticated}
            />
            <Route
              path="/poll/:id"
              render={props => <PollPage authed={isAuthenticated} {...props} />}
            />
            <Route
              path="/"
              render={props => <LandingPage authed={isAuthenticated} {...props} />}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth, polls: state.polls });

export default connect(mapStateToProps, { pollsFetch, fetchUser })(App);
