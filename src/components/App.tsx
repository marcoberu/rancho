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

export interface AppProps {}

export const App = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
  });
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes auth={auth} />}>
          <Route path='login' element={<Login setAuth={setAuth} />} />
          <Route path='*' element={<Navigate to='login' />} />
        </Route>

        <Route path='/' element={<PrivateRoutes auth={auth} />}>
          <Route
            path='home'
            element={
              <div>
                <Sidebar setAuth={setAuth} />
                <section className='home'>
                  <div className='text'>Tablero</div>
                </section>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
