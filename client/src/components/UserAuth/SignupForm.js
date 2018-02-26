import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../common';
import {
  COLOR_WHITE,
  COLOR_WHITE_15,
  COLOR_BLUE_LIGHT,
  TEXT_PRIMARY,
} from '../../constants/style';

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: COLOR_WHITE_15,
    padding: '6rem',
    borderRadius: 2,
  },
  headerStyle: {
    fontSize: TEXT_PRIMARY,
    color: COLOR_WHITE,
    textAlign: 'center',
    marginBottom: '4rem',
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
};

class SignupForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  };

  render() {
    const { containerStyle, headerStyle, buttonContainerStyle } = styles;
    return (
      <form onSubmit={this.handleSubmit} style={containerStyle}>
        <div style={headerStyle}>Sign up to create your first form!</div>
        <div>
          <Field name="firstName" type="text" component={Input} hintText="Jane Doe" />
        </div>
        <div>
          <Field name="email" type="text" component={Input} hintText="name@email.com" />
        </div>
        <div>
          <Field name="password" type="password" component={Input} hintText="password" />
        </div>
        <div style={buttonContainerStyle}>
          <Button type="submit" inverted>Sign Up</Button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signup',
})(connect()(SignupForm));
