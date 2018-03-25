import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Card, Button } from '../../common';
import { COLOR_GREY_DARK, COLOR_GREY_DARK_50 } from '../../../constants/style';
import { submitPoll } from '../../../actions';
import PollOptions from './PollOptions';
import PollResults from './PollResults';


const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '15rem 0',
    '@media screen and (max-width: 800px)': {
      margin: 0,
    },
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: COLOR_GREY_DARK,
    margin: '1rem',
  },
  h2: {
    lineHeight: 1.125,
    textAlign: 'center',
    marginBottom: '1rem',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  bottomStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '1rem',
    color: COLOR_GREY_DARK_50,
  },
};

class PollView extends Component {
  static propTypes = {
    polls: PropTypes.object.isRequired,
    livePoll: PropTypes.object,
    submitPoll: PropTypes.func.isRequired,
    fetchSinglePoll: PropTypes.func.isRequired,
    pollId: PropTypes.string.isRequired,
  }

  state = {
    id: '',
    title: '',
    options: [],
    author: '',
    totalVotes: '',
    showResults: false,
  }

  componentDidUpdate(prevProps) {
    const { polls } = this.props;
    if (JSON.stringify(prevProps.polls) !== JSON.stringify(polls)) {
      const { poll } = polls.single;
      this.setState({
        id: poll._id,
        title: poll.title,
        options: poll.options,
        author: poll.author,
        totalVotes: poll.totalVotes,
      });
    }
  }

  handleSubmit = (event) => {
    const { option } = this.props.livePoll.values;
    const { id } = this.state;
    this.props.submitPoll(option, id);
    this.setState({ showResults: true });
    event.preventDefault();
  }

  render() {
    const {
      containerStyle, cardStyle, h2, formStyle, bottomStyle,
    } = styles;

    const {
      livePoll, polls, pollId, fetchSinglePoll,
    } = this.props;
    const disabled = !livePoll || !livePoll.values;

    return (
      <div className="poll-view" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2 style={h2}>{this.state.title}</h2>
          { this.state.showResults
          ? <PollResults
            fetchSinglePoll={fetchSinglePoll}
            pollId={pollId}
            poll={polls.single.poll}
          />
          : <form style={formStyle} onSubmit={this.handleSubmit}>
            <Field name="option" options={this.state.options} component={PollOptions} />
            <Button
              type="submit"
              primary
              disabled={disabled}
            >
            Submit
            </Button>
            </form>
          }
          <div style={bottomStyle}>
            <p>Created by {this.state.author}</p>
            <p>Total votes: {this.state.totalVotes}</p>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  livePoll: state.form.poll,
  polls: state.polls,
});

PollView = Radium(PollView);

export default reduxForm({
  form: 'poll',
})(connect(mapStateToProps, { submitPoll })(PollView));
