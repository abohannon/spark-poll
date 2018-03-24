import React, { Component } from 'react';
import Radium from 'radium';
import PollCard from '../PollCard';

const styles = {
  gridStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '108rem',
    margin: '0 auto',
    '@media screen and (max-width: 1152px)': {
      width: '81rem',
    },
    '@media screen and (max-width: 850px)': {
      width: '54rem',
    },
    '@media screen and (max-width: 575px)': {
      width: '27rem',
    },
  },
};

class GridDisplay extends Component {
  render() {
    const currentPolls = this.props.polls;
    return (
      <div className="grid-display" style={{ ...styles.gridStyle, ...this.props.style }}>
        {currentPolls.map((poll, index) => (
          <PollCard
            key={poll.title + index}
            id={poll._id}
            title={poll.title}
            votes={poll.totalVotes || 0}
            date={poll.dateCreated}
            author={poll.author}
            user={poll.user}
          />
        ))}
      </div>
    );
  }
}

GridDisplay = Radium(GridDisplay);

export { GridDisplay };
