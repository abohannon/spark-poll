import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { Nav, Logo } from '../common';
import { mainNav, mainNavAuthed } from '../../config/navigation';
import { COLOR_WHITE } from '../../constants/style';

const styles = {
  navContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    color: COLOR_WHITE,
    zIndex: 100,
    paddingLeft: '20rem',
    paddingRight: '20rem',
    height: '12rem',
    '@media screen and (max-width: 980px)': {
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
  },
  logoStyle: {
    marginRight: 'auto',
    color: COLOR_WHITE,
  },
};

class MainNav extends Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className="nav" style={styles.navContainerStyle}>
        <Link to="/">
          <Logo style={styles.logoStyle} />
        </Link>
        <Nav type={this.props.authed ? mainNavAuthed : mainNav} />
      </div>
    );
  }
}

export default Radium(MainNav);
