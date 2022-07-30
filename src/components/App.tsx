import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';

import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { Login } from '../pages/Login';
import { Sidebar } from './layout/Sidebar';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes auth={{ isAuthenticated: true }} />}>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Navigate to='login' />} />
        </Route>
        <Route
          path='/'
          element={<PrivateRoutes auth={{ isAuthenticated: true }} />}
        />
        <Route path='/private' element={<Sidebar />} />
      </Routes>
    </Router>
  );
};
