import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './auth'; // Asumimos que tienes este hook de autenticación

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // Si el usuario no está autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Si el usuario no tiene el rol necesario, redirige a una página de acceso denegado
    return <Navigate to="/access-denied" replace />;
  }

  // Si el usuario está autenticado y tiene el rol adecuado, renderiza el componente hijo
  return <Outlet />;
};

export default ProtectedRoute;