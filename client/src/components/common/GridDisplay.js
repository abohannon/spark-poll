import React from 'react';
import { Card } from './Card';

const styles = {
  gridStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
};

const GridDisplay = () => (
  <div className="grid-display" style={styles.gridStyle}>
    <Card />
    <Card />
    <Card />
  </div>
);

export { GridDisplay };
