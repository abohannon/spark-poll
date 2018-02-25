import React from 'react';
import MainNav from './MainNav';
import HeaderSection from './HeaderSection';
import PollsSection from './PollsSection';

const LandingPage = () => (
  <div className="landing">
    <MainNav />
    <HeaderSection />
    <PollsSection />
  </div>
);

export default LandingPage;
