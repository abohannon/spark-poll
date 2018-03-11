import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Input } from '../common';

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
};


class PollCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        <Field name="option1" type="text" component={Input} hintText="Option 1" inputType="light" />,
        <Field name="option2" type="text" component={Input} hintText="Option 2" inputType="light" />,
      ],
    };
  }

  addOption = () => {
    const { options } = this.state;
    const num = this.state.options.length + 1;

    const newOption = <Field name={`option${num}`} type="text" component={Input} hintText={`Option ${num}`} inputType="light" />;

    const newState = [...options];
    newState.push(newOption);

    this.setState({
      options: newState,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="poll-create-form" style={styles.containerStyle}>
        <Card type="wide" style={styles.cardStyle}>
          <h2>Create a new poll</h2>
          <form style={styles.formStyle}>
            <Field name="title" type="text" component={Input} hintText="Poll title" inputType="light" />
            {this.state.options}
            <Button secondary>Save poll</Button>
            <Button secondary onClick={() => this.addOption()}>Add option</Button>
            <Button secondary>Delete option</Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default reduxForm({
  form: 'createPoll',
})(PollCreateForm);
