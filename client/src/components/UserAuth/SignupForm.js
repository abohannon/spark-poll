import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../common';

class SignupForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Field name="firstName" type="text" component={Input} hintText="Jane Doe" />
        </div>
        <div>
          <Field name="email" type="text" component={Input} hintText="name@email.com" />
        </div>
        <div>
          <Field name="password" type="password" component={Input} hintText="password" />
        </div>
        <Button type="submit" secondary>Sign Up</Button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signup',
})(connect()(SignupForm));
