import { useState } from 'react';

import Button from '../../components/button';
import { TextField } from '../../components/input';

import styles from './styles.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submit = () => {
    if (!email) setEmailError('Por favor, insira um email.');
    if (!password) setPasswordError('Por favor, insira uma senha.');
  };

  return (
    <div className={styles.container}>
      <section className={styles.quote}>
        <blockquote>
          <span>“U</span>m livro deve ser o machado que quebra o mar gelado em
          nós.
        </blockquote>

        <span>Franz Kafka</span>

        {/* A leitura é a viagem de quem não pode pegar um trem. */}
        {/* Francis de Croisset  */}
      </section>

      <section className={styles.loginSection}>
        <TextField
          id="email"
          placeholder="Insira o seu email"
          label="Email"
          value={email}
          onChange={(e) => {
            setEmailError('');
            setEmail(e.target.value);
          }}
          errorMsg={emailError}
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
          errorMsg={passwordError}
        />

        <div className={styles.buttons}>
          <Button disabled text="cadastrar" />

          <Button text="entrar" onClick={submit} />
        </div>
      </section>
    </div>
  );
}
