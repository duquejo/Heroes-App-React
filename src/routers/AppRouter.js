import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={ <DashboardRoutes /> } />
          <Route exact path="/login" element={ <LoginScreen /> } />
        </Routes>
      </div>
    </Router>
  )
};