import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const styles = {
  narrow: {
    height: '350px',
    width: '250px',
    margin: '.9rem',
    padding: '2rem',
  },
  wide: {
    minHeight: 350,
    maxWidth: 400,
    minWidth: 300,
    margin: '2rem 0rem',
    padding: '4rem',
    boxSizing: 'border-box',
  },
};

class Card extends Component {
  static propTypes = {
    zDepth: PropTypes.number,
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {
      zDepth, type, children, style,
    } = this.props;

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
  }
}

export { Card };
