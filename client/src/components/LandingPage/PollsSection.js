import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { GridDisplay, Loader } from '../common';
import { COLOR_GREY_DARK, COLOR_WHITE_GREY, COLOR_BLUE_80 } from '../../constants/style';

const styles = {
  pollsSectionContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-12.5rem',
    padding: '20rem 4rem',
    minHeight: '120rem',
    backgroundColor: COLOR_WHITE_GREY,
    '@media screen and (max-width: 575px)': {
      padding: '20rem 2rem',
    },
  },
  gridContainerStyle: {
    flex: 1,
    paddingTop: '2rem',
    margin: '10rem auto',
    maxWidth: '107.5rem',
    '@media screen and (max-width: 575px)': {
      margin: '5rem auto',
    },
  },
  titleStyle: {
    fontSize: '4rem',
    color: COLOR_GREY_DARK,
    '@media screen and (max-width: 575px)': {
      fontSize: '2.5rem',
    },
  },
};


class PollsSection extends Component {
  static propTypes = {
    polls: PropTypes.array.isRequired,
  }

  render() {
    const {
      pollsSectionContainerStyle,
      gridContainerStyle,
      titleStyle,
    } = styles;

    return (
      <div style={pollsSectionContainerStyle}>
        <h2 id="polls" style={titleStyle}>Latest Polls</h2>
        <div style={gridContainerStyle}>
          { !this.props.polls
          ? <Loader />
          : <GridDisplay polls={this.props.polls} />
        }
        </div>
        <div style={{ color: COLOR_BLUE_80 }}>
        Made by Adam | <a href="https://github.com/abohannon/spark-poll">View the code on GitHub</a>
        </div>
      </div>
    );
  }
}

export default Radium(PollsSection);
