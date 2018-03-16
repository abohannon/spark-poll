import React from 'react';
import PollCard from '../PollCard';

const styles = {
  gridStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

const GridDisplay = (props) => {
  const currentPolls = props.polls;
  return (
    <div className="grid-display" style={styles.gridStyle}>
      {currentPolls.map((poll, index) => (
        <PollCard
          key={poll.title + index}
          id={poll._id}
          title={poll.title}
          votes="20"
          date={poll.dateCreated}
          author={poll.author}
        />
    ))}
    </div>
  );
};

export { GridDisplay };
