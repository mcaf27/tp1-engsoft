import Button from '../../components/button';

import styles from './styles.module.css';

export default function Login() {
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
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div className={styles.input}>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" />
        </div>

        <div className={styles.buttons}>
          <Button disabled text="cadastrar" />

          <Button href="/" text={'entrar'} />
        </div>
      </section>
    </div>
  );
}
