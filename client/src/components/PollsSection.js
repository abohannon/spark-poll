import React, { Component } from 'react';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_PURPLE,
  COLOR_BLUE,
  COLOR_GREY_DARK,
  TEXT_PRIMARY,
} from '../constants/style';

const styles = {
  pollsSectionContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14rem 20rem',
    height: 800,
  },
};


class PollsSection extends Component {
  render() {
    const {
      pollsSectionContainerStyle,
    } = styles;

    return (
      <div style={pollsSectionContainerStyle}>
        <h1 style={{ color: COLOR_GREY_DARK }}>Newest Polls</h1>
      </div>
    );
  }
}

export default PollsSection;
