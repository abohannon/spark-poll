import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../util/helpers';
import { Card, Button } from './common';
import { deletePoll } from '../actions';
import { COLOR_GREY_DARK, COLOR_GREY_DARK_50 } from '../constants/style';

const styles = {
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  h2: {
    lineHeight: 1.125,
  },
  votesStyle: {
    fontSize: '1.6rem',
    color: COLOR_GREY_DARK,
    lineHeight: 3,
  },
  dateStyle: {
    color: COLOR_GREY_DARK_50,
    fontSize: '1.1rem',
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const {
  cardStyle,
  h2,
  votesStyle,
  buttonContainerStyle,
  buttonStyle,
  dateStyle,
} = styles;

class PollCard extends Component {
  // check to see which polls are the user's polls
  renderDeleteButton = (auth, user, id, deletePoll) => {
    if (auth.user && auth.user.id === user) {
      return (
        <Button style={buttonStyle} onClick={() => deletePoll(id)} secondary>
        Delete
        </Button>
      );
    }
  }

  render() {
    const {
      id,
      title,
      votes,
      date,
      author,
      user,
      auth,
      deletePoll,
    } = this.props;

    return (
      <Card type="narrow" style={cardStyle}>
        <div>
          <h2 style={h2}>{title}</h2>
          <p style={votesStyle}>Total votes: {votes}</p>
          <p style={dateStyle}>Date created: {formatDate(new Date(date))}</p>
          <p style={dateStyle}>Author: {author}</p>
        </div>
        <div style={buttonContainerStyle}>
          <Link to={{ pathname: `/poll/${id}` }}>
            <Button style={buttonStyle} secondary>
          View
            </Button>
          </Link>
          {this.renderDeleteButton(auth, user, id, deletePoll)}
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { deletePoll })(PollCard);
