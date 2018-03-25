import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FieldArray, reduxForm } from 'redux-form';
import { createPoll } from '../../actions';
import FormFields from './FormFields';
import { Card } from '../common';

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
    createPoll: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  handleSubmit = (event) => {
    const { newPoll, user, history } = this.props;
    event.preventDefault();
    if (newPoll.values && newPoll.values.options && newPoll.values.options[0]) {
      this.props.createPoll(newPoll.values, user, history);
    }
  }

  render() {
    const { containerStyle, cardStyle } = styles;

    const { newPoll } = this.props;
    const disabled = !newPoll.values
    || newPoll.values && !newPoll.values.title
    || !newPoll.values.options;

    return (
      <div className="poll-create-form" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2>Create a new poll</h2>
          <FieldArray
            name="options"
            handleSubmit={this.handleSubmit}
            component={FormFields}
            disabled={disabled}
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
})(connect(mapStateToProps, { createPoll })(PollCreateForm));
