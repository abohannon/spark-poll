import React from 'react';
import { Card } from './Card';

const styles = {
  gridStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const GridDisplay = ({ children }) => (
  <div className="grid-display" style={styles.gridStyle}>
    {children}
  </div>
);

export { GridDisplay };
