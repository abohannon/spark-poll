import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  narrow: {
    height: '350px',
    width: '250px',
    margin: '2rem',
  },
  wide: {
    minHeight: '350px',
    width: '400px',
    margin: '2rem',
  },
};

const Card = ({ zDepth, type, children }) => {
  const cardStyle = () => {
    switch (type) {
      case 'narrow':
        return styles.narrow;
      case 'wide':
        return styles.wide;
      default:
        return styles.narrow;
    }
  };

  return (
    <div className="card">
      <Paper style={cardStyle()} zDepth={zDepth || 1}>
        {children}
      </Paper>
    </div>
  );
};

export { Card };
