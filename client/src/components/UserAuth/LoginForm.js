import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../common';
import {
  COLOR_WHITE,
  COLOR_WHITE_15,
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

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  };

  render() {
    const { containerStyle, headerStyle, buttonContainerStyle } = styles;
    return (
      <form onSubmit={this.handleSubmit} style={containerStyle}>
        <div style={headerStyle}>Please login to get started.</div>
        <div>
          <Field name="email" type="text" component={Input} hintText="name@email.com" />
        </div>
        <div>
          <Field name="password" type="password" component={Input} hintText="password" />
        </div>
        <div style={buttonContainerStyle}>
          <Button type="submit" inverted>Login</Button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form: 'login',
})(connect()(LoginForm));
