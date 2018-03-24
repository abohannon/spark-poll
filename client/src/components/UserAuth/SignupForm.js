import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Input } from '../common';
import {
  COLOR_WHITE,
  COLOR_WHITE_15,
  TEXT_PRIMARY,
  COLOR_PINK,
} from '../../constants/style';
import { createUser } from '../../actions';
import { validateEmail, required } from '../../util/helpers';

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: COLOR_WHITE_15,
    padding: '6rem 6rem 3rem 6rem',
    borderRadius: 2,
    '@media screen and (max-width: 360px)': {
      alignItems: 'center',
      padding: '6rem 3rem',
    },
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
  static defaultProps = {
    signupForm: undefined,
  }

  static propTypes = {
    createUser: PropTypes.func.isRequired,
    signupForm: PropTypes.object,
    auth: PropTypes.object.isRequired,
  }

  handleSubmit = (event) => {
    const { createUser, signupForm } = this.props;
    event.preventDefault();
    createUser(signupForm.values);
  };

  confirmation = () => {
    const { auth } = this.props;
    if (auth.create_user_fail) {
      return (
        <div style={{ color: COLOR_PINK, textAlign: 'center' }}>
          * {this.props.auth.create_user_fail}
        </div>
      );
    } else if (auth.create_user_success) {
      return (
        <div style={{ color: COLOR_PINK, textAlign: 'center', fontSize: '1.6rem' }}>
          Account successfully created! <Link to="/login">Login &rarr;</Link>
        </div>
      );
    }
  }

  render() {
    const { containerStyle, headerStyle, buttonContainerStyle } = styles;
    return (
      <form onSubmit={this.handleSubmit} style={containerStyle}>
        <div style={headerStyle}>Sign up to create your first poll!</div>
        <div>
          <Field
            name="firstName"
            type="text"
            component={Input}
            hintText="Jane Doe"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="email"
            type="text"
            component={Input}
            hintText="name@email.com"
            validate={[required, validateEmail]}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            component={Input}
            hintText="password"
            validate={required}
          />
        </div>
        <div style={buttonContainerStyle}>
          <Button type="submit" inverted>Sign Up</Button>
        </div>
        {this.confirmation()}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  signupForm: state.form.signup,
  auth: state.auth,
});

SignupForm = Radium(SignupForm);

export default reduxForm({
  form: 'signup',
})(connect(mapStateToProps, { createUser })(SignupForm));
