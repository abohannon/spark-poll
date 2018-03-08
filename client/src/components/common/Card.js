import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  cardStyle: {
    height: '350px',
    width: '250px',
    margin: '2rem',
  },
};

const Card = ({ zDepth }) => (
  <div>
    <Paper style={styles.cardStyle} zDepth={zDepth || 1} />
  </div>
);

export { Card };
