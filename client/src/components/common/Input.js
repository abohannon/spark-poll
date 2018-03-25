import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_BLUE_LIGHT,
  COLOR_GREY_DARK,
} from '../../constants/style';

const darkStyles = {
  hintStyle: {
    color: COLOR_BLUE_LIGHT,
  },
  underlineFocusStyle: {
    borderColor: COLOR_PINK,
  },
  inputStyle: {
    color: COLOR_WHITE,
  },
};

const lightStyles = {
  underlineFocusStyle: {
    borderColor: COLOR_PINK,
  },
  inputStyle: {
    color: COLOR_GREY_DARK,
  },
};

const Input = (props) => {
  const {
    input, hintText, type, inputType, meta: { touched, error, warning },
  } = props;

  const renderStyle = () => {
    switch (inputType) {
      case 'light': {
        return lightStyles;
      }
      default:
        return darkStyles;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        type={type}
        hintText={hintText}
        hintStyle={renderStyle().hintStyle}
        underlineFocusStyle={renderStyle().underlineFocusStyle}
        inputStyle={renderStyle().inputStyle}
        style={{ marginTop: 2 }}
        {...input}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
  hintText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

export { Input };
