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
          to="/meus-livros"
          className={pathname === '/meus-livros' ? styles.active : undefined}
        >
          meus livros
        </Link>
        <Link
          to="/lista-de-desejos"
          className={
            pathname === '/lista-de-desejos' ? styles.active : undefined
          }
        >
          lista de desejos
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
