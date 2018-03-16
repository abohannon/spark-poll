import React from 'react';
import { Card, Button } from './common';
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

const PollCard = ({
  title, votes, date, author,
}) => {
  const {
    cardStyle,
    h2,
    votesStyle,
    buttonContainerStyle,
    buttonStyle,
    dateStyle,
  } = styles;
  return (
    <Card type="narrow" style={cardStyle}>
      <div>
        <h2 style={h2}>{title}</h2>
        <p style={votesStyle}>Total votes: {votes}</p>
        <p style={dateStyle}>Date created: {date}</p>
        <p style={dateStyle}>Author: {author}</p>
      </div>
      <div style={buttonContainerStyle}>
        <Button style={buttonStyle} secondary>
    View
        </Button>
        <Button style={buttonStyle} secondary>
    Delete
        </Button>
      </div>
    </Card>
  );
};

export default PollCard;
