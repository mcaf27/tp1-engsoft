import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Container, Toolbar, Typography, MenuItem } from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';

const Dot = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '4rem',
  position: 'absolute',
  bottom: '0.5rem',
}));


function LoggedMenuItems() {
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <>
      <MenuItem
        sx={{
          borderBottom:
            pathname === '/livros' || pathname === '/'
              ? `2px solid ${theme.palette.text.primary}`
              : '0',
          mr: 2,
        }}
      >
        <Link style={{ padding: `${theme.spacing(3)} 0` }} to="/livros">
          livros
        </Link>
      </MenuItem>

      <MenuItem
        sx={{
          borderBottom:
            pathname === '/minha-biblioteca' ? `2px solid ${theme.palette.text.primary}` : '0',
        }}
      >
        <Link to="/minha-biblioteca" style={{ padding: `${theme.spacing(3)} 0` }}>
          Biblioteca de {localStorage.getItem('Email')}
        </Link>
      </MenuItem>
    </>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const theme = useTheme();

  const [isLogged] = useState(true);

  return (
    <AppBar position="static" sx={{ mb: 10 }}>
      <Container maxWidth="xl">
        <Toolbar>
          {isLogged && (
            <LoggedMenuItems/>
          )}

          <MenuItem component={Link} to="/" sx={{ ml: 'auto', my: isLogged ? 1 : 3 }}> 
            <Typography
              variant="h1"
              sx={{
                fontSize: '2.5rem',
                lineHeight: '2.5rem',
                letterSpacing: '1px',
                position: 'relative',
              }}
            >
              AKLM<Dot>.</Dot>
            </Typography>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

