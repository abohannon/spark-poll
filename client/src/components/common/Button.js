import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_BLUE_LIGHT,
} from '../../constants/style';

const primaryStyle = {
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

const invertedStyle = {
  buttonStyle: {
    background: COLOR_WHITE,
  },
  labelStyle: {
    color: COLOR_PINK,
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

const secondaryStyle = {
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

const blueStyle = { ...primaryStyle, buttonStyle: { background: COLOR_BLUE_LIGHT } };

const Button = ({
  children,
  type,
  primary,
  secondary,
  inverted,
  blue,
  href,
  onClick,
  disabled,
}) => {
  let button = null;
  const buttonProps = {
    type, label: children, onClick, disabled,
  };
  if (primary) {
    button = <RaisedButton {...buttonProps} {...primaryStyle} />;
  } else if (inverted) {
    button = <RaisedButton {...buttonProps} {...invertedStyle} />;
  } else if (secondary) {
    button = <FlatButton {...buttonProps} {...secondaryStyle} />;
  } else if (blue) {
    button = <RaisedButton {...buttonProps} {...blueStyle} />;
  }

  return (
    href
      ? <Link to={href || '#'}>
        {button}
        </Link>
      : button
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  blue: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};


export { Button };
