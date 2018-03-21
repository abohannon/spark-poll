import React, { Component } from 'react';
import { GridDisplay } from '../common';
import { COLOR_GREY_DARK } from '../../constants/style';

const styles = {
  pollsSectionContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14rem 20rem',
    height: 800,
  },
  gridContainerStyle: {
    width: '100%',
    marginTop: '10rem',
  },
};


class PollsSection extends Component {
  render() {
    const {
      pollsSectionContainerStyle,
      gridContainerStyle,
    } = styles;

    return (
      <div style={pollsSectionContainerStyle}>
        <h1 id="polls" style={{ color: COLOR_GREY_DARK }}>Newest Polls</h1>
        <div style={gridContainerStyle}>
          <GridDisplay polls={this.props.polls} />
        </div>
      </div>
    );
  }
}

export default PollsSection;
