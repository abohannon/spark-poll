import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props => (
        authed === true
          ? <Component {...props} />
          : <Redirect to="/" />
    )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authed: PropTypes.bool.isRequired,
};

export default PrivateRoute;
