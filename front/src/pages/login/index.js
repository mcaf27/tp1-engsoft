import Button from '../../components/button';
import Navbar from '../../components/navbar';

import styles from './styles.module.css';

export default function Login() {
  return (
    <>
      <Navbar />
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
            <Button text="cadastrar" />

            <Button text={'entrar'} />
          </div>
        </section>
      </div>
    </>
  );
}
