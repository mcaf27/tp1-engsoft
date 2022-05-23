import { useState } from 'react';

import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './pages/login';
import Books from './pages/books';
import Library from './pages/library';

import Navbar from './components/navbar';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  const [isLogged] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isLogged={isLogged}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Books />
              </PrivateRoute>
            }
          />
          <Route
            path="/livros"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Books />
              </PrivateRoute>
            }
          />
          <Route
            path="/minha-biblioteca"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Library />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
