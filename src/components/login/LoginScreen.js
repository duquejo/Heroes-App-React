import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate(); // useNavigate Hook for history control 

  const { dispatch } = useContext( AuthContext );

  const handleClick = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: { name: 'Jose Miguel' }
    });
    navigate( lastPath, { replace: true } );
  }

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr/>
      <button className="btn btn-primary" onClick={ handleClick }>
        Login
      </button>
    </div>
  )
};