import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <GlobalStyles />
    </BrowserRouter>
  );
}
