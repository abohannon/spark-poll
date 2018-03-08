import React, { Component } from 'react';
import { Nav, Logo } from '../common';
import { mainNav } from '../../config/navigation';
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
        <Logo style={{ marginRight: 'auto', color: COLOR_WHITE }} />
        <Nav type={mainNav} />
      </div>
    );
  }
}

export default MainNav;
