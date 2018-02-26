import React from 'react';
import TextField from 'material-ui/TextField';

const Input = (props) => {
  const { input, hintText } = props;
  return (
    <TextField
      hintText={hintText}
      {...input}
    />
  );
};

export { Input };
