import { Navigate, Outlet } from 'react-router-dom';

export interface Route {
  auth: { isAuthenticated: boolean };
}

export const PublicRoutes = ({ auth: { isAuthenticated } }: Route) => {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/home' />;
};
