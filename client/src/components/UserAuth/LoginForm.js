import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Field, reduxForm } from 'redux-form';
import { Button, Input } from '../common';
import {
  COLOR_WHITE,
  COLOR_WHITE_15,
  TEXT_PRIMARY,
} from '../../constants/style';
import { loginUser } from '../../actions';
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

class LoginForm extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    loginForm: PropTypes.object,
    history: PropTypes.object.isRequired,
  }

  handleSubmit = (event) => {
    const { loginUser, loginForm, history } = this.props;
    event.preventDefault();
    loginUser(loginForm.values, history);

    console.log('SUBMIT');
  };

  render() {
    const { containerStyle, headerStyle, buttonContainerStyle } = styles;
    return (
      <form onSubmit={this.handleSubmit} style={containerStyle}>
        <div style={headerStyle}>Please login to get started.</div>
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
          <Button type="submit" inverted>Login</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loginForm: state.form.login,
  auth: state.auth,
});

LoginForm = Radium(LoginForm);

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps, { loginUser })(LoginForm));
