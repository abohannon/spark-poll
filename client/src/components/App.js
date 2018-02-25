import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './UserDashboard/Dashboard';

class App extends Component {
  render() {
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

export default App;
