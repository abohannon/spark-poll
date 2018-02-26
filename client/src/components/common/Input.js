import React from 'react';
import TextField from 'material-ui/TextField';
import {
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_BLUE_LIGHT,
} from '../../constants/style';

const styles = {
  hintStyle: {
    color: COLOR_BLUE_LIGHT,
  },
  underlineFocusStyle: {
    borderColor: COLOR_PINK,
  },
};

const Input = (props) => {
  const { input, hintText, type } = props;
  return (
    <TextField
      type={type}
      hintText={hintText}
      hintStyle={styles.hintStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      inputStyle={{ color: COLOR_WHITE }}
      {...input}
    />
  );
};

export { Input };
