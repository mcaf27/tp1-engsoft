import Book from '../../components/book';
import Button from '../../components/button';

import styles from './styles.module.css';

import data from '../../books.json';

export default function Books() {
  return (
    <main className={styles.main}>
      <header>
        <h2>Meus livros</h2>
        <Button className={styles.button} text="cadastrar novo livro" />
      </header>
      <div className={styles.content}>
        {data.map((book) => (
          <Book
            cover={book.Capa}
            title={book.Título}
            author={book.Autor}
            genre={book.Gênero}
            key={book.ID_Livro}
          />
        ))}
      </div>
    </main>
  );
}
