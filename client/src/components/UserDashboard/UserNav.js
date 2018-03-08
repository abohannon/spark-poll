import React from 'react';
import { Logo, Button } from '../common';
import { BOX_SHADOW, COLOR_GREY_DARK_15 } from '../../constants/style';

const styles = {
  containerStyle: {
    width: '100%',
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFF',
    boxShadow: BOX_SHADOW,
    flexShrink: 0,
    zIndex: 100,
    padding: '8px 32px',
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navListItemStyle: {
    listStyleType: 'none',
    marginRight: '6rem',
    opacity: '.6',
    transition: 'all .2s',
    fontSize: 14,
    lastChild: {
      marginRight: '3rem',
    },
  },
};

const UserNav = () => {
  const { containerStyle, navListStyle, navListItemStyle } = styles;
  return (
    <div className="user-nav" style={containerStyle}>
      <Button secondary>+ New Poll</Button>
      <Logo style={{ color: COLOR_GREY_DARK_15, size: '35px' }} med />
      <ul style={navListStyle}>
        <li style={navListItemStyle}>
          Hello, Adam!
        </li>
        <li style={{ ...navListItemStyle, ...navListItemStyle.lastChild }}>
          Log out
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
