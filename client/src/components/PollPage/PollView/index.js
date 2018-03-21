import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Card, Button } from '../../common';
import PollOptions from './PollOptions';

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h2: {
    lineHeight: 1.125,
    textAlign: 'center',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
};

class PollView extends Component {
  state = {
    title: '',
    options: [],
  }

  componentDidUpdate(prevProps) {
    const { pollData } = this.props;
    if (JSON.stringify(prevProps.pollData) !== JSON.stringify(pollData)) {
      this.setState({
        title: pollData.poll.title,
        options: pollData.poll.options,
      });
    }
  }

  handleSubmit = (event) => {
    const { response } = this.props.livePoll.values;
    console.log(response); // TODO: Remove and complete action.
    console.log('Submit');
    event.preventDefault();
  }

  render() {
    const {
      containerStyle, cardStyle, h2, formStyle,
    } = styles;

    const { livePoll } = this.props;

    const disabled = !livePoll || !livePoll.values;
    return (
      <div className="poll-view" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2 style={h2}>{this.state.title}</h2>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <Field name="response" options={this.state.options} component={PollOptions} />
            <Button type="submit" primary disabled={disabled}>Submit</Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  livePoll: state.form.poll,
  pollData: state.polls.data,
});

export default reduxForm({
  form: 'poll',
})(connect(mapStateToProps)(PollView));
