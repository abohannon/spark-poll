import React from 'react';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_PURPLE,
  COLOR_BLUE,
  TEXT_PRIMARY,
} from '../constants/style';
import { Button } from './common';

const styles = {
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '90vh',
    width: '100%',
    position: 'relative',
    background: `linear-gradient(to right top, ${COLOR_PURPLE}, ${COLOR_BLUE})`,
    padding: '14rem 20rem',
    '-webkit-clip-path': 'polygon(0 0, 100% 0, 100% 90vh, 0% 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 80vh, 0% 100%)',
  },
  headerContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headingStyle: {
    color: COLOR_WHITE,
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: '1.5',
  },
  buttonStyle: {
    fontSize: TEXT_PRIMARY,
    color: COLOR_WHITE,
    background: COLOR_PINK,
  },
};

const Header = () => {
  const {
    headerStyle, headerContentStyle, headingStyle,
  } = styles;

  return (
    <div className="header" style={headerStyle}>
      <div className="header__content" style={headerContentStyle}>
        <h1 style={headingStyle}>
          <span style={{ display: 'block' }}>Create and</span>
          <span style={{ display: 'block' }}>share polls with</span>
          <span style={{ display: 'block' }}>friends</span>
        </h1>
        <Button type="primary" margin>Create a poll</Button>
      </div>
    </div>
  );
};

export default Header;
