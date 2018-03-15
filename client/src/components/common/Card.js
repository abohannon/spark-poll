import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  narrow: {
    height: '350px',
    width: '250px',
    margin: '2rem',
    padding: '2rem',
  },
  wide: {
    minHeight: '350px',
    width: '400px',
    margin: '2rem',
    padding: '4rem',
  },
};

const Card = ({
  zDepth, type, children, style,
}) => {
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
      <Paper style={{ ...cardStyle(), ...style }} zDepth={zDepth || 1}>
        {children}
      </Paper>
    </div>
  );
};

export { Card };
