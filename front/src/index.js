import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
