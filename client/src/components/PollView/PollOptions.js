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

const PollOptions = () => (
  <RadioButtonGroup name="pollOptions" style={styles.buttonGroupStyle}>
    {options.map((option, index) => (
      <RadioButton
        index={index}
        value={option}
        label={option}
        style={styles.buttonStyle}
        uncheckedIcon={<UncheckedIcon />}
        checkedIcon={<CheckedIcon style={styles.checkedStyle} />}
      />
    ))}
  </RadioButtonGroup>
);

export default PollOptions;
