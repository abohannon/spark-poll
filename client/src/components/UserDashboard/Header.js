import React from 'react';
import { Button } from '../common';
import ChatBubble from '../../images/icons/ChatBubble';
import { COLOR_GREY_DARK, COLOR_BLUE_LIGHT, COLOR_GREY_DARK_25 } from '../../constants/style';

const styles = {
  containerStyle: {
    margin: '2rem',
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

const Header = (props) => {
  const {
    containerStyle, headerLeftStyle, leftContentStyle, h2,
  } = styles;
  return (
    <div className="header" style={containerStyle}>
      <div style={headerLeftStyle}>
        <ChatBubble width={36} height={32} fill={COLOR_BLUE_LIGHT} />
        <div style={leftContentStyle}>
          <h2 style={h2}>{props.title}</h2>
          <p>No. of polls: 0</p>
        </div>
      </div>
      <div className="header__buttons">
        <Button blue href="/dashboard">Your Polls</Button>
        <Button inverted>All Polls</Button>
      </div>
    </div>
  );
};

export default Header;
