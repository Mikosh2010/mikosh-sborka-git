import React from 'react';
import { Header } from './components//Header';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return isLoggedIn ? (
    <Header area={true}/>
  ) : (
    <Header area={false}/>
  );
};

export default ProtectedRoute;