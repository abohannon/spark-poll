import React, { Component } from 'react';
import Radium from 'radium';
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
    padding: '0rem 4rem',
    WebkitClipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
  },
};

class HeroSection extends Component {
  render() {
    return (
      <div className="hero" style={{ ...styles.heroStyle, ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}

HeroSection = Radium(HeroSection);

export { HeroSection };
