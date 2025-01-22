import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import DashboardRoutes from './DashboardRoutes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
