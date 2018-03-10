import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { Logo, Button } from '../common';
import { BOX_SHADOW, COLOR_GREY_DARK_15, COLOR_PINK } from '../../constants/style';

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
  buttonStyle: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'flex-start',
  },
  navListContainerStyle: {
    marginLeft: 'auto',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
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
  logoStyle: {
    justifyContent: 'center',
    color: COLOR_GREY_DARK_15,
    size: '35px',
    flex: 1,
  },
  linkStyle: {
    ':hover': {
      color: COLOR_PINK,
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
};

const UserNav = (props) => {
  const {
    containerStyle,
    buttonStyle,
    navListStyle,
    navListItemStyle,
    navListContainerStyle,
    logoStyle,
    linkStyle,
  } = styles;

  return (
    <div className="user-nav" style={containerStyle}>
      <div style={buttonStyle}>
        <Button primary href="/dashboard/create-poll">
          + New Poll
        </Button>
      </div>
      <Logo style={logoStyle} med />
      <ul style={navListStyle}>
        <li style={navListItemStyle}>
          Hello, Adam!
        </li>
        <li style={{ ...navListItemStyle, ...navListItemStyle.lastChild, ...linkStyle }}>
          <Link to="/" onClick={() => props.handleLogout()}>Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Radium(UserNav);
