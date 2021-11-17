import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" 
                 element={ 
                  <PrivateRoute>
                    <DashboardRoutes /> 
                  </PrivateRoute> 
                 }/>
          <Route exact 
                 path="/login" 
                 element={ 
                  <PublicRoute>
                    <LoginScreen />
                  </PublicRoute>
                 } />
        </Routes>
      </div>
    </Router>
  )
};