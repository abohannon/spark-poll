import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSinglePoll } from '../../actions';
import MainNav from '../MainNav';
import PollView from './PollView';
import { HeroSection } from '../common';

const styles = {
  heroStyle: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '85vh',
    height: 'auto',
  },
};
class PollPage extends Component {
  static propTypes = {
    fetchSinglePoll: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    authed: PropTypes.bool.isRequired,
  }

  componentWillMount() {
    const pollId = this.props.match.params.id;
    this.props.fetchSinglePoll(pollId);
  }

  render() {
    const pollId = this.props.match.params.id;

    return (
      <div>
        <MainNav authed={this.props.authed} />
        <HeroSection style={styles.heroStyle}>
          <PollView fetchSinglePoll={this.props.fetchSinglePoll} pollId={pollId} />
        </HeroSection>
      </div>
    );
  }
}

const mapStateToProps = state => ({ poll: state.polls.data });

export default connect(mapStateToProps, { fetchSinglePoll })(PollPage);
