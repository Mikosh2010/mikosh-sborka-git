import React from 'react';
import { Header } from './components//Header';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <Header profile={true}/>
  ) : (
    <Header profile={false}/>
  );
};

export default ProtectedRoute;