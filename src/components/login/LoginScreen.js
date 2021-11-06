import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate(); // useNavigate Hook for history control 

  const handleClick = () => {
    navigate('/', { replace: true } );
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