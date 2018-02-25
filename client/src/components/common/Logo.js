import React from 'react';
import Spark from '../../images/icons/Spark';
import { COLOR_WHITE } from '../../constants/style';

const styles = {
  navLogoStyle: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const Logo = () => (
  <div className="nav__logo" style={styles.navLogoStyle}>
    <Spark fill={COLOR_WHITE} width="50px" height="50px" />
    <div style={{ marginLeft: '2rem', fontSize: '2rem' }}>Spark Poll</div>
  </div>
);

export { Logo };
