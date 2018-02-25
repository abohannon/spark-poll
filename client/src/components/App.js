import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Nav />
          <HeaderSection />
          <PollsSection />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
