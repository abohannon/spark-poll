import React, { Component } from 'react';
import MainNav from '../MainNav';
import PollView from './PollView';
import { HeroSection } from '../common';

class PollPage extends Component {
  componentDidMount() {
    console.log('======= PollPage mounted');
  }

  render() {
    return (
      <div>
        <MainNav authed={this.props.authed} />
        <HeroSection>
          <PollView />
        </HeroSection>
      </div>
    );
  }
}

export default PollPage;
