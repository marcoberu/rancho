import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useState } from 'react';

import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';
import { Login } from '../pages/Login';
import { Sidebar } from './layout/Sidebar';
import { Warehouse } from '../pages/Warehouse';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Notifications } from '../pages/Notifications';
import { Analytics } from '../pages/Analytics';
import { Employees } from '../pages/Employees';
import { Budget } from '../pages/Budget';

export interface AppProps {}

export const App = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: '',
  });
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes auth={auth} />}>
          <Route path='login' element={<Login setAuth={setAuth} />} />
          <Route path='*' element={<Navigate to='login' />} />
        </Route>

        <Route path='/' element={<PrivateRoutes auth={auth} />}>
          <Route path='/' element={<Sidebar setAuth={setAuth} auth={auth} />}>
            <Route path='home' element={<Home />} />
            <Route path='almacen' element={<Warehouse />} />
            <Route path='notificaciones' element={<Notifications />} />
            <Route path='analiticos' element={<Analytics />} />
            <Route path='empleados' element={<Employees />} />
            <Route path='cartera' element={<Budget />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
