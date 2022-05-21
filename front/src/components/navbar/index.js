import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <section>
        <Link to="/" className={pathname === '/' ? styles.active : undefined}>
          home
        </Link>
        <Link
          to="/livros"
          className={pathname === '/livros' ? styles.active : undefined}
        >
          livros
        </Link>
        <Link
          to="/minha-biblioteca"
          className={
            pathname === '/minha-biblioteca' ? styles.active : undefined
          }
        >
          minha biblioteca
        </Link>
      </section>

      <section>
        <Link to="/">
          <h1>
            AKLM<span>.</span>
          </h1>
        </Link>
      </section>
    </nav>
  );
}
