import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common';
import ChatBubble from '../../images/icons/ChatBubble';
import {
  COLOR_GREY_DARK,
  COLOR_BLUE_LIGHT,
  COLOR_GREY_DARK_25,
} from '../../constants/style';

const styles = {
  containerStyle: {
    margin: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeftStyle: {
    display: 'flex',
    alignItems: 'center',
  },
  leftContentStyle: {
    marginLeft: '1.5rem',
    lineHeight: 1.5,
    color: COLOR_GREY_DARK_25,
    fontWeight: 'bold',
  },
  h2: {
    color: COLOR_GREY_DARK,
  },
};

class Header extends Component {
  renderButtons = (location) => {
    if (location.pathname === '/dashboard/polls-all') {
      return (
        <div className="header__buttons">
          <Button href="/dashboard" inverted>Your Polls</Button>
          <Button href="/dashboard/polls-all" blue>All Polls</Button>
        </div>
      );
    }
    return (
      <div className="header__buttons">
        <Button href="/dashboard" blue>Your Polls</Button>
        <Button href="/dashboard/polls-all" inverted>All Polls</Button>
      </div>
    );
  }

  render() {
    const {
      containerStyle, headerLeftStyle, leftContentStyle, h2,
    } = styles;
    const { polls, title, location } = this.props;

    return (
      <div className="header" style={containerStyle}>
        <div style={headerLeftStyle}>
          <ChatBubble width={36} height={32} fill={COLOR_BLUE_LIGHT} />
          <div style={leftContentStyle}>
            <h2 style={h2}>{title}</h2>
            <p>Total polls created: {polls.length}</p>
          </div>
        </div>
        {this.renderButtons(location)}
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
