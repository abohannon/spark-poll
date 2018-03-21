import React from 'react';
import { Route } from 'react-router-dom';
import {
  COLOR_PINK,
  COLOR_WHITE,
  TEXT_PRIMARY,
} from '../../constants/style';
import { Button, HeroSection } from '../common';
import LoginForm from '../UserAuth/LoginForm';
import SignupForm from '../UserAuth/SignupForm';

const styles = {
  heroStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headingStyle: {
    color: COLOR_WHITE,
    fontWeight: 600,
    lineHeight: '1.5',
  },
  buttonStyle: {
    fontSize: TEXT_PRIMARY,
    color: COLOR_WHITE,
    background: COLOR_PINK,
  },
  authContainerStyle: {
    display: 'flex',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Header = (props) => {
  const {
    heroStyle, headerContentStyle, headingStyle, authContainerStyle,
  } = styles;

  return (
    <HeroSection style={heroStyle}>
      <div className="header__auth" style={authContainerStyle}>
        <Route path="/login" render={() => <LoginForm history={props.history} />} />
        <Route path="/signup" render={() => <SignupForm />} />
      </div>
      <div className="header__content" style={headerContentStyle}>
        <h1 style={headingStyle}>
          <span style={{ display: 'block' }}>Create and</span>
          <span style={{ display: 'block' }}>share polls with</span>
          <span style={{ display: 'block' }}>friends</span>
        </h1>
        <Button href={props.authed ? '/dashboard/create-poll' : '/signup'} primary margin>Create a poll</Button>
      </div>
    </HeroSection>
  );
};

export default Header;
