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

    const disabled = !this.props.livePoll || !this.props.livePoll.values;
    console.log('user props', this.props.user);
    return (
      <div className="poll-view" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2 style={h2}>What&apos;s your favorite movie genre?</h2>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <Field name="response" component={PollOptions} />
            <Button type="submit" primary disabled={disabled}>Submit</Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  livePoll: state.form.poll,
  user: state.user,
});

export default reduxForm({
  form: 'poll',
})(connect(mapStateToProps)(PollView));
