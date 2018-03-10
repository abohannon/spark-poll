import React from 'react';
import { Button } from '../common';
import ChatBubble from '../../images/icons/ChatBubble';
import { COLOR_GREY_DARK, COLOR_BLUE_LIGHT } from '../../constants/style';

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
  h2: {
    color: COLOR_GREY_DARK,
    marginLeft: '1rem',
  },
};

const Header = props => (
  <div className="header" style={styles.containerStyle}>
    <div style={styles.headerLeftStyle}>
      <ChatBubble width={36} height={32} fill={COLOR_BLUE_LIGHT} />
      <h2 style={styles.h2}>{props.title}</h2>
    </div>
    <div className="header__buttons">
      <Button blue href="/dashboard">Your Polls</Button>
      <Button inverted>All Polls</Button>
    </div>
  </div>
);

export default Header;
