import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

  const { user: { name }, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    dispatch({
      type: types.logout
    });
    navigate('/login', { replace: true } );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">Asociaciones</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/marvel"
                className={ ({ isActive }) => "nav-link" + ( isActive ? " activated" : "" )} 
                end>
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dc"
                className={ ({ isActive }) => "nav-link" + ( isActive ? " activated" : "" )}
                end>
                DC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={ ({ isActive }) => "nav-link" + ( isActive ? " activated" : "" )}
                end>
                Search hero
              </NavLink>
            </li>
          </ul>

          <div className="navbar-nav">

            <span className="nav-item nav-link text-info">
              { name }
            </span>

            <button className="nav-item nav-link btn"
                    onClick={ handleLogout }>
              Logout
            </button>

          </div>

        </div>
      </div>
    </nav>
  )
};