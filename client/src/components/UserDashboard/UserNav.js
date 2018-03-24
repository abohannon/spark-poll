import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { Logo, Button } from '../common';
import {
  BOX_SHADOW,
  COLOR_GREY_DARK_15,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/style';

const styles = {
  containerStyle: {
    width: '100%',
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    boxShadow: BOX_SHADOW,
    flexShrink: 0,
    zIndex: 100,
    padding: '8px 32px',
    '@media screen and (max-width: 800px)': {
      flexDirection: 'column',
      height: 'auto',
      paddingTop: '2rem',
    },
  },
  buttonStyle: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'flex-start',
    '@media screen and (max-width: 800px)': {
      marginRight: 0,
      order: 3,
    },
  },
  navListStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    '@media screen and (max-width: 800px)': {
      order: 2,
      marginTop: '2rem',
      justifyContent: 'space-evenly',
      width: '30rem',
    },
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
    '@media screen and (max-width: 800px)': {
      marginRight: 0,
    },
  },
  logoStyle: {
    justifyContent: 'center',
    color: COLOR_GREY_DARK_15,
    size: '35px',
    flex: 1,
    '@media screen and (max-width: 800px)': {
      order: 1,
      margin: '2rem 0rem',
    },
  },
  linkStyle: {
    ':hover': {
      color: COLOR_PINK,
      cursor: 'pointer',
      transform: 'translateY(-2px)',
    },
  },
};

const greeting = props => (props.auth.user ? `Hello, ${props.auth.user.firstName}!` : '');

const UserNav = (props) => {
  const {
    containerStyle,
    buttonStyle,
    navListStyle,
    navListItemStyle,
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
          {greeting(props)}
        </li>
        <li style={{ ...navListItemStyle, ...navListItemStyle.lastChild, ...linkStyle }}>
          <Link to="/" onClick={() => props.handleLogout()}>Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Radium(UserNav);
