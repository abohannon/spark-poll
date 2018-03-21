import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { pollsFetch } from '../../actions';
import MainNav from '../MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

class LandingPage extends Component {
  componentWillMount() {
    this.props.pollsFetch();
  }

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
    // TODO: Delete this eventually?
    // if (this.props.authed) {
    //   return (
    //     <Redirect to="/dashboard" />
    //   );
    // }
    return (
      <div className="landing">
        <MainNav authed={this.props.authed} />
        <HeaderSection history={this.props.history} />
        <PollsSection location={this.props.location} />
      </div>
    );
  }
}

export default connect(null, { pollsFetch })(LandingPage);
