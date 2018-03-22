import React from 'react';
import {
  COLOR_PURPLE_80,
  COLOR_BLUE_80,
} from '../../constants/style';
import Crowd from '../../images/crowd-low.jpg';

const styles = {
  heroStyle: {
    width: '100%',
    position: 'relative',
    background: `linear-gradient(to right top, ${COLOR_PURPLE_80}, ${COLOR_BLUE_80}), url(${Crowd})`,
    backgroundSize: 'cover',
    padding: '14rem 20rem',
    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
  },
};

const HeroSection = props => (
  <div className="hero" style={{ ...styles.heroStyle, ...props.style }}>
    {props.children}
  </div>
);

export { HeroSection };
