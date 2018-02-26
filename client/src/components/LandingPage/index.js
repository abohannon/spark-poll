import React from 'react';
import MainNav from './MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

const LandingPage = (props) => {
  console.log('LandingPage Props:', props);
  return (
    <div className="landing">
      <MainNav />
      <HeaderSection />
      <PollsSection />
    </div>
  );
};

export default LandingPage;
