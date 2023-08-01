import React from 'react';
import { Header } from './components//Header';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Header area={true}/>
  ) : (
    <Header area={false}/>
  );
};

export default ProtectedRoute;