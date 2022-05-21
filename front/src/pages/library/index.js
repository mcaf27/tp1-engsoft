import { useState } from 'react';

import mainStyles from '../main.module.css';
import styles from './styles.module.css';

import BookListItem from '../../components/bookListItem';

import data from '../../books.json';

export default function Library() {
  const [books] = useState(data.slice(0, 20));

  return (
    <main className={mainStyles.main}>
      <header>
        <h2>Minha biblioteca</h2>
      </header>
      <div
        style={{
          color: 'var(--dark)',
        }}
        className={[styles.content, styles.section].join(' ')}
      >
        <h3>Meus livros</h3>
        <div
          style={{
            display: 'grid',
            // flexDirection: 'column',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {books.map((book) => (
            <BookListItem
              key={book.ID_Livro}
              title={book.Título}
              author={book.Autor}
              cover={book.Capa}
              genre={book.Gênero}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
