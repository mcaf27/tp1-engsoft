import { useState } from 'react';

import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';

import Login from './pages/login';
import Books from './pages/books';
import Wishlist from './pages/wishlist';

import Navbar from './components/navbar';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
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
            path="/meus-livros"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Books />
              </PrivateRoute>
            }
          />
          <Route
            path="/lista-de-desejos"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Wishlist />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
