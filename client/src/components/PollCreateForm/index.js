import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Card, Button, Input } from '../common';
import Cross from '../../images/icons/Cross';
import { BOX_SHADOW, COLOR_GREY_DARK, COLOR_PINK } from '../../constants/style';

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
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


class PollCreateForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.createPoll.values);
  }

  renderForm = ({ fields }) => {
    const {
      inputContainerStyle, formStyle, deleteStyle, crossStyle,
    } = styles;
    return (
      <form style={formStyle} onSubmit={this.handleSubmit}>
        <Field name="title" type="text" component={Input} hintText="Poll title" inputType="light" />
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
        <Button type="submit" primary>Save poll</Button>
      </form>
    );
  }

  render() {
    const { containerStyle, cardStyle } = styles;
    return (
      <div className="poll-create-form" style={containerStyle}>
        <Card type="wide" style={cardStyle}>
          <h2>Create a new poll</h2>
          <FieldArray name="options" component={this.renderForm} />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({ createPoll: state.form.createPoll });

export default reduxForm({
  form: 'createPoll',
})(connect(mapStateToProps)(Radium(PollCreateForm)));
