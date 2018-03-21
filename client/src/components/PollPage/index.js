import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePoll } from '../../actions';
import MainNav from '../MainNav';
import PollView from './PollView';
import { HeroSection } from '../common';

class PollPage extends Component {
  componentWillMount() {
    console.log('======= PollPage mounted');

    const pollId = this.props.match.params.id;
    this.props.fetchSinglePoll(pollId);
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

const mapStateToProps = state => ({ poll: state.polls.data });

export default connect(mapStateToProps, { fetchSinglePoll })(PollPage);
