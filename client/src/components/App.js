import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pollsFetch } from '../actions';
import LandingPage from './LandingPage';
import Dashboard from './UserDashboard/Dashboard';

class App extends Component {
  componentWillMount() {
    this.props.pollsFetch();
  }
  render() {
    console.log('app props', this.props);
    return (
      <MuiThemeProvider>
        <Router>
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
