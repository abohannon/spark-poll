import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radium from 'radium';
import { FieldArray, reduxForm } from 'redux-form';
import { createPoll } from '../../actions';
import FormFields from './FormFields';
import { Card } from '../common';
import { COLOR_GREY_DARK } from '../../constants/style';

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem',
  },
  formStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
  },
  inputContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '-3rem',
  },
  deleteStyle: {
    cursor: 'pointer',
    marginLeft: '2rem',
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

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'title',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

class PollCreateForm extends Component {
  static propTypes = {
    newPoll: PropTypes.object.isRequired,
  }

  handleSubmit = (event) => {
    const { newPoll, user } = this.props;
    event.preventDefault();
    if (newPoll.values && newPoll.values.options && newPoll.values.options[0]) {
      console.log(newPoll.values);
      console.log('inside handleSubmit', user);
      this.props.createPoll(newPoll.values, user);
    } else {
      console.log('Please add at least 1 option to your poll!');
    }
  }

  render() {
    const { containerStyle, cardStyle } = styles;
    return (
      <div className="poll-create-form" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2>Create a new poll</h2>
          <FieldArray
            name="options"
            handleSubmit={this.handleSubmit}
            component={FormFields}
          />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  newPoll: state.form.newPoll,
});

export default reduxForm({
  form: 'newPoll',
  validate,
})(connect(mapStateToProps, { createPoll })(Radium(PollCreateForm)));
