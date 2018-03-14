import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import UncheckedIcon from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import CheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked';
import { COLOR_PURPLE_LIGHT } from '../../constants/style';


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

const options = [
  'Horror',
  'Cyber Punk Noir',
  'Mockumentary',
  'Spaghetti Western',
];

const PollOptions = ({ input, ...rest }) => {
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
          key={option + index}
          index={index}
          value={option}
          label={option}
          style={buttonStyle}
          uncheckedIcon={<UncheckedIcon />}
          checkedIcon={<CheckedIcon style={checkedStyle} />}
        />
        ))}
    </RadioButtonGroup>
  );
};

export default PollOptions;
