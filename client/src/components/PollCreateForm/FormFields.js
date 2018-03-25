import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Button, Input } from '../common';
import Cross from '../../images/icons/Cross';
import { COLOR_GREY_DARK } from '../../constants/style';

const styles = {
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
  },
  inputContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '-2rem',
  },
  deleteStyle: {
    cursor: 'pointer',
    marginLeft: '1rem',
  },
  crossStyle: {
    fill: COLOR_GREY_DARK,
    width: 10,
    height: 10,
    ':hover': {
      height: 50,
    },
  },
};

const FormFields = ({
  fields,
  meta: { touched, error },
  handleSubmit,
  disabled,
}) => {
  const {
    inputContainerStyle, formStyle, deleteStyle, crossStyle,
  } = styles;
  console.log(disabled);

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={Input}
        hintText="Poll title"
        inputType="light"
        errorText={touched && error}
      />
      {fields.map((option, index) => (
        <div key={index} style={inputContainerStyle}>
          <Field
            name={option}
            type="text"
            component={Input}
            hintText={`Option ${index + 1}`}
            inputType="light"
          />
          <div onClick={() => fields.remove(index)} style={deleteStyle}>
            <Cross {...crossStyle} />
          </div>
        </div>
      ))}
      <Button secondary onClick={() => fields.push()}>Add option</Button>
      <Button type="submit" disabled={disabled} primary>Save poll</Button>
    </form>
  );
};

FormFields.propTypes = {
  fields: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FormFields;
