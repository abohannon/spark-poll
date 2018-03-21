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
    const {
      authed, history, location, polls,
    } = this.props;
    // TODO: Delete this eventually?
    // if (authed) {
    //   return (
    //     <Redirect to="/dashboard" />
    //   );
    // }
    return (
      <div className="landing">
        <MainNav authed={authed} />
        <HeaderSection authed={authed} history={history} />
        <PollsSection location={location} polls={polls} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ polls: state.polls.all });

export default connect(mapStateToProps, { pollsFetch })(LandingPage);
