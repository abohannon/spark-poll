import React, { Component } from 'react';
import { Card, Button } from '../common';
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
    padding: '4rem',
  },
  h2: {
    lineHeight: 1.125,
    textAlign: 'center',
  },
};

class PollView extends Component {
  render() {
    const { containerStyle, cardStyle, h2 } = styles;
    return (
      <div className="poll-view" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2 style={h2}>What&apos;s your favorite movie genre?</h2>
          <PollOptions />
          <Button primary>Submit</Button>
        </Card>
      </div>
    );
  }
}

export default PollView;
