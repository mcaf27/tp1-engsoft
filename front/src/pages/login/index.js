import { useState } from 'react';

import { Container, Card, Stack, Button, TextField } from '@mui/material';
import { styled } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submit = () => {
    if (!email) setEmailError('Por favor, insira um email.');
    if (!password) setPasswordError('Por favor, insira uma senha.');
  };

  const Quote = styled(Stack)(() => ({
    '& blockquote': {
      fontSize: '2.5rem',
      '& span': {
        fontWeight: 700,
        fontStyle: 'italic',
      },
    },
    '& p': {
      width: '100%',
      textAlign: 'right',
      fontSize: '1.25rem',
      marginTop: '1rem',
    },
  }));

  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 10,
      }}
    >
      <Quote sx={{ width: '45%' }}>
        <blockquote>
          <span>“U</span>m livro deve ser o machado que quebra o mar gelado em nós.
        </blockquote>
        <p>Franz Kafka</p>
      </Quote>

      {/* A leitura é a viagem de quem não pode pegar um trem. */}
      {/* Francis de Croisset  */}
      <Card sx={{ px: 3, py: 6, width: '40%' }}>
        <Stack gap={3} mb={3}>
          <TextField
            id="email"
            placeholder="Insira o seu email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmailError('');
              setEmail(e.target.value);
            }}
            error={!!emailError}
            helperText={emailError}
          />

          <TextField
            id="password"
            placeholder="Insira a sua senha"
            type="password"
            value={password}
            label="Senha"
            onChange={(e) => {
              setPasswordError('');
              setPassword(e.target.value);
            }}
            error={!!passwordError}
            helperText={passwordError}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Button size="large" variant="contained" disabled>
            cadastrar
          </Button>

          <Button size="large" variant="contained" onClick={submit}>
            entrar
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
