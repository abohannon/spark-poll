import React from 'react';
import Spark from '../../images/icons/Spark';
import { COLOR_WHITE } from '../../constants/style';

const styles = {
  navLogoStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const Logo = (props) => {
  const { style, med } = props;
  return (
    <div className="nav__logo" style={{ ...styles.navLogoStyle }}>
      <Spark
        fill={props.style.color || COLOR_WHITE}
        width={props.med ? '35px' : '50px'}
        height={med ? '35px' : '50px'}
      />
      <div
        style={{
          marginLeft: med ? '1.2rem' : '2rem',
          fontSize: med ? '1.7rem' : '2rem',
          color: style.color || COLOR_WHITE,
        }}
      >
        Spark Poll
      </div>
    </div>
  );
};

export { Logo };
