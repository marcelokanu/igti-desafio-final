import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { ToastProvider } from 'react-toast-notifications';

import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <ToastProvider>
      <Dashboard />
      <GlobalStyles />
    </ToastProvider>
  );
}
