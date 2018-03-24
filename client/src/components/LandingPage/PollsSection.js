import React, { Component } from 'react';
import { GridDisplay, Loader } from '../common';
import { COLOR_GREY_DARK, COLOR_WHITE_GREY } from '../../constants/style';

const styles = {
  pollsSectionContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-12.5rem',
    padding: '20rem 4rem',
    minHeight: '120rem',
    backgroundColor: COLOR_WHITE_GREY,
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
          { !this.props.polls
          ? <Loader />
          : <GridDisplay polls={this.props.polls} />
        }
        </div>
      </div>
    );
  }
}

export default PollsSection;
