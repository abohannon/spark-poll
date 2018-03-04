import React from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from './MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

const LandingPage = (props) => {
  console.log('landing page', props);
  if (props.authed) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <div className="landing">
      <MainNav />
      <HeaderSection />
      <PollsSection />
    </div>
  );
};

export default LandingPage;
