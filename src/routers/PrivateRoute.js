import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PrivateRoute = ({ children }) => {

  const location = useLocation();
  const { user } = useContext(AuthContext);
  
  localStorage.setItem('lastPath', location.pathname );

  return user.logged ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired
};