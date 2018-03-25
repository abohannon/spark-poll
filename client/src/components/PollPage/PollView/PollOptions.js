import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import UncheckedIcon from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import CheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked';
import { COLOR_PURPLE_LIGHT } from '../../../constants/style';


const styles = {
  buttonGroupStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '1.6rem',
    margin: '4rem 0 4rem 0',
  },
  buttonStyle: {
    marginTop: '1rem',
  },
  uncheckedStyle: {

  },
  checkedStyle: {
    fill: COLOR_PURPLE_LIGHT,
  },
};

const PollOptions = ({ input, options, ...rest }) => {
  const {
    buttonGroupStyle,
    checkedStyle,
    buttonStyle,
  } = styles;

  return (
    <RadioButtonGroup
      {...input}
      {...rest}
      name="pollOptions"
      style={buttonGroupStyle}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    >
      {options.map((option, index) => (
        <RadioButton
          key={option.name + index}
          index={index}
          value={option.name}
          label={option.name}
          style={buttonStyle}
          uncheckedIcon={<UncheckedIcon />}
          checkedIcon={<CheckedIcon style={checkedStyle} />}
        />
        ))}
    </RadioButtonGroup>
  );
};

PollOptions.propTypes = {
  options: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
};

export default PollOptions;
