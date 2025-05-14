
import React from 'react';
import { Navigate } from 'react-router-dom';

// This component redirects visitors from /index to the HomePage
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
