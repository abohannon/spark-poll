import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    '@media screen and (max-width: 800px)': {
      padding: '15rem 0rem',
      height: 'auto',
      WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    },
  },
};

class HeroSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object.isRequired,
  }

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
