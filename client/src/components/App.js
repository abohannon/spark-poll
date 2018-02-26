import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { pollsFetch } from '../actions';
import LandingPage from './LandingPage';
import Dashboard from './UserDashboard/Dashboard';
import LoginForm from './UserAuth/LoginForm';
import SignupForm from './UserAuth/SignupForm';

const history = createHistory();

class App extends Component {
  componentWillMount() {
    this.props.pollsFetch();
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth, polls: state.polls });

export default connect(mapStateToProps, { pollsFetch })(App);
