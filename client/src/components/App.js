import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Nav />
          <Header />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
