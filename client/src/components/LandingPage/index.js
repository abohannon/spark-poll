import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from './MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

class LandingPage extends Component {
  componentWillReceiveProps(nextProps) {
    // logic for smooth scrolling of hash links
    const { hash } = nextProps.location;
    const options = {
      behavior: 'smooth',
      block: 'start',
    };
    if (hash) {
      document.querySelector(hash).scrollIntoView(options);
    }
  }

  render() {
    if (this.props.authed) {
      return (
        <Redirect to="/dashboard" />
      );
    }
    return (
      <div className="landing">
        <MainNav />
        <HeaderSection />
        <PollsSection location={this.props.location} />
      </div>
    );
  }
}

export default LandingPage;
