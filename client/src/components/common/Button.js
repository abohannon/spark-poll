import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  COLOR_PINK,
  COLOR_WHITE,
} from '../../constants/style';

const primaryProps = {
  buttonStyle: {
    background: COLOR_PINK,
  },
  labelStyle: {
    color: COLOR_WHITE,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
  },
  overlayStyle: {
    width: '100%',
  },
  style: {
    margin: '2rem 0 2rem 0',
  },
};

const secondaryProps = {
  labelStyle: {
    color: COLOR_PINK,
    fontSize: '1.2rem',
    letterSpacing: '.2rem',
    marginLeft: 10,
    marginRight: 10,
    fontFamily: '\'Rubik\', sans-serif',
    fontWeight: 400,
  },
  style: {
    margin: '2rem 0 2rem 0',
  },
};

const Button = ({
  children, type, primary, secondary,
}) => {
  let button = null;
  if (primary) {
    button = <RaisedButton type={type} label={children} {...primaryProps} />;
  } else if (secondary) {
    button = <FlatButton type={type} label={children} {...secondaryProps} />;
  }

  return (
    <div>
      {button}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};


export { Button };
