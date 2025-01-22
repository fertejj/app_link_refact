import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Dashboard/Settings";
import Analytics from "../pages/Dashboard/Analytics";

const DashboardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="settings" element={<Settings />} />
      <Route path="analytics" element={<Analytics />} />
    </Routes>
  );
};

export default DashboardRoutes;
