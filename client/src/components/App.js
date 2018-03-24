import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import PrivateRoute from './UserAuth/PrivateRoute';
import LandingPage from './LandingPage';
import PollPage from './PollPage';
import Dashboard from './UserDashboard/';

const history = createHistory();

class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <StyleRoot>
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
      </StyleRoot>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(App);
