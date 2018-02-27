import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../common';
import {
  COLOR_WHITE,
  COLOR_WHITE_15,
  TEXT_PRIMARY,
} from '../../constants/style';
import { createUser } from '../../actions';

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
    const { createUser, signupForm } = this.props;
    event.preventDefault();
    createUser(signupForm.values);
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

const mapStateToProps = state => ({ signupForm: state.form.signup });

export default reduxForm({
  form: 'signup',
})(connect(mapStateToProps, { createUser })(SignupForm));
