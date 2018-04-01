import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pollsFetch } from '../../actions';
import MainNav from '../MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

class LandingPage extends Component {
  static propTypes = {
    pollsFetch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    authed: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    polls: PropTypes.array.isRequired,
  }

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

    return (
      <div className="landing">
        <MainNav authed={authed} />
        <HeaderSection authed={authed} history={history} />
        <PollsSection location={location} polls={polls} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ polls: state.polls });

export default connect(mapStateToProps, { pollsFetch })(LandingPage);
