import { Navigate, Outlet } from 'react-router-dom';

import { Route } from './PublicRoutes';

export const PrivateRoutes = ({ auth: { isAuthenticated } }: Route) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};
