import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Documents from './components/Documents/Documents';
import Companies from './components/Companies/Companies';
import Users from './components/Users/Users';
import Trainings from './components/Trainings/Trainings';
import Audits from './components/Audits/Audits';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/users" element={<Users />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/audits" element={<Audits />} />
            {/* Agrega rutas extras si necesitas */}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}