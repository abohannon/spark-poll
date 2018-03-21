import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  },
};

class MainNav extends Component {
  render() {
    return (
      <div className="nav" style={styles.navContainerStyle}>
        <Link to="/">
          <Logo style={{ marginRight: 'auto', color: COLOR_WHITE }} />
        </Link>
        <Nav type={this.props.authed ? mainNavAuthed : mainNav} />
      </div>
    );
  }
}

export default MainNav;
