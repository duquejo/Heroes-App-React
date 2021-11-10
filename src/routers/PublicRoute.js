import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PublicRoute = ({children}) => {
  const { user } = useContext(AuthContext);
  return ! user.logged ? children :  <Navigate to='/'/>;
};

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired
};