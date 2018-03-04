import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log('private route', authed);
      return (
        authed === true
          ? <Component {...props} />
          : <Redirect to="/" />
    );
}
    }
  />
);

export default PrivateRoute;
