import React from 'react';
import { COLOR_PINK } from '../constants/style';

export const formatDate = (date) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
};

/*
* FORM VALIDATION
*/

export const required = value => (
  value ? undefined : <span style={{ color: COLOR_PINK }}>Required</span>
);

export const validateEmail = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    <span style={{ color: COLOR_PINK }}>Invalid email address</span> : undefined
);

/*
* API URL
*/

export const api_url = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:5000'
  : 'https://spark-poll-api.herokuapp.com';

